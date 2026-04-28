import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabaseClient: SupabaseClient | null = null

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return ['http:', 'https:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

if (
  typeof window !== 'undefined' && 
  supabaseUrl && 
  supabaseKey && 
  isValidUrl(supabaseUrl) &&
  !supabaseUrl.includes('your-supabase-url')
) {
  supabaseClient = createClient(supabaseUrl, supabaseKey)
}

export const supabase = supabaseClient