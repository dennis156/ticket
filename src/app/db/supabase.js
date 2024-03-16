import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient(
  "https://ninyuligxjovydnxdife.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pbnl1bGlneGpvdnlkbnhkaWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjY4NDIsImV4cCI6MjAyNTk0Mjg0Mn0.hKiJWgBDB-2OB_SqyofIgXsWcojzSoXXXteKj8WhJQ4"
);