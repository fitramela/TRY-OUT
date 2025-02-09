import { NextApiRequest, NextApiResponse } from 'next';
import {supabase} from '../../../db/supabase';
import { NextRequest, NextResponse } from 'next/server';

// Interface untuk Soal
export interface Question {
  id: number;
  relation: string;
  question: string;
  options: string[];
  correctanswer: string;
  image: string;
  explanation: string;
}

// API Handler untuk mengambil soal berdasarkan 'relation'
export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const relation = context.params.slug;
  console.log(relation, context.params)
  // Validasi input
  if (typeof relation !== 'string') {
    return NextResponse.json({ error: 'Invalid relation parameter' });
  }

  try {
    // Ambil data soal berdasarkan 'relation' dari Supabase
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('relation', relation);

    if (error) {
      console.error('Error fetching questions:', error);
      return NextResponse.json({ error: 'Error fetching data' });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ message: 'No questions found' });
    }

    // Kirim data soal sebagai response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Unexpected error occurred' });
  }
}
