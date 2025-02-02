import { NextApiRequest, NextApiResponse } from 'next';
import {supabase} from '../../../db/supabase';

// Interface untuk Soal
interface Question {
  id: number;
  relation: string;
  question: string;
  options: string[];
  correctAnswer: string;
  image: string;
  explanation: string;
}

// API Handler untuk mengambil soal berdasarkan 'relation'
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { relation } = req.query;

  // Validasi input
  if (typeof relation !== 'string') {
    return res.status(400).json({ error: 'Invalid relation parameter' });
  }

  try {
    // Ambil data soal berdasarkan 'relation' dari Supabase
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('relation', relation);

    if (error) {
      console.error('Error fetching questions:', error);
      return res.status(500).json({ error: 'Error fetching data' });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No questions found' });
    }

    // Kirim data soal sebagai response
    return res.status(200).json(data);
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Unexpected error occurred' });
  }
}
