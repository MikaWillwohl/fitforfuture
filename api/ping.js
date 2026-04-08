import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export default async function handler(req, res) {
  await supabase.from('anmeldungen').select('id').limit(1);
  res.status(200).json({ ok: true });
}
