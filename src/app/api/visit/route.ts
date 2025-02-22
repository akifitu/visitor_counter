import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

// Upstash Redis bağlantısı (DÜZELTİLDİ)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!, // .env.local içinden çekiyor
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// API route'u oluştur
export async function GET() {
  try {
    // Ziyaretçi sayısını 1 artır
    const newCount = await redis.incr('visitor_count');

    // Yeni değeri döndür
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Redis Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
