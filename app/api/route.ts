
import { NextApiRequest, NextApiResponse } from 'next';
import pdf from 'pdf-parse';
import fs from 'fs';

export async function POST(request: NextApiRequest) {
  try {
    const formData = await request.formData();
    const pdfFile = formData.get('pdf');
    const pdfBytes = await pdfFile.arrayBuffer();

    const data = await pdf(pdfBytes);

    const text = data.text;
    
    return Response.json({
      status: 200,
      body: { text },
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return Response.json({
      status: 500,
      body: { error: 'Error parsing PDF file' },
      headers: { 'Content-Type': 'application/json' }
    });
  }
  }