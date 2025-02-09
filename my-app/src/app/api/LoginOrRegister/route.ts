import { NextApiRequest, NextApiResponse } from 'next';
import { loginOrRegister } from '../../auth/lib';
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"
import { supabase } from '@/app/db/supabase';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../auth/lib'

interface ResponseData {
  message?: string;
  error?: string;
  user?: object;
  token?: string;
}

export async function GET(
  request: NextRequest,
  context: { params: {} }
) {
    return NextResponse.json({
        message: "Login"
    })
}


export async function POST(
  request: NextRequest,
  context: { params: {} }
) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email dan password diperlukan' }, { status: 400 });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Format email tidak valid' }, { status: 400 });
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      return NextResponse.json({ error: 'Password harus memiliki minimal 8 karakter, terdiri dari huruf dan angka' }, { status: 400 });
    }

    console.log("Mengecek user di database...");
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error("Error saat cek user:", fetchError);
      return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }

    let user;
    if (existingUser) {
      console.log("User ditemukan, memverifikasi password...");
      const passwordMatch = await bcrypt.compare(password, existingUser.password);
      if (!passwordMatch) {
        return NextResponse.json({ error: 'Password salah' }, { status: 401 });
      }
      user = existingUser;
    } else {
      console.log("User baru, melakukan registrasi...");
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([{ email, password: hashedPassword }])
        .select()
        .single();

      if (insertError) {
        console.error("Error saat insert user:", insertError);
        return NextResponse.json({ error: insertError.message }, { status: 500 });
      }

      user = newUser;
    }

    // Jika sampai sini berarti sukses
    console.log("Login/Registrasi berhasil!", user);
    const token = generateToken(user);

    return NextResponse.json({ message: 'Berhasil login/register!', user, token }, { status: 200 });

  } catch (error: any) {
    console.error("Unhandled server error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
