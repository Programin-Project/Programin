import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://gispisurowcvuroofdmb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpc3Bpc3Vyb3djdnVyb29mZG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTU2MjIsImV4cCI6MjA2Mzc5MTYyMn0.g5FNQayb-TDUzxhnmNrgzC2DHyxVH-jkaCN3DO__4zs'
)

export default supabase
