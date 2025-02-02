import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { supabase } from '../db/supabase';
import { User } from './type'

// Secret Key untuk JWT
const JWT_SECRET = process.env.JWT_SECRET || '12345';



// Fungsi untuk Hash Password
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Fungsi untuk Verifikasi Password
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Fungsi untuk Generate Token
export const generateToken = (user: User): string => {
  return jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '30d' } // Token berlaku selama 1 hari
  );
};

// Fungsi Login/Register
export const loginOrRegister = async (email: string, password: string): Promise<{ user: User, token: string }> => {
  // Cek apakah email sudah ada di database
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (user) {
    // Login: Verifikasi password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      throw new Error('Password salah.');
    }
    // Jika valid, generate token
    const token = generateToken(user);
    
    return { user, token };
  } else {
    // Register: Buat user baru
    const hashedPassword = await hashPassword(password);
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert([{ email, password: hashedPassword }])
      .single();

    if (insertError) {
      throw new Error('Gagal mendaftarkan user.');
    }
    // Setelah register, generate token
    const token = generateToken(newUser);
    return { user: newUser, token };
  }
};

