-- شغّل هذا الملف يدوياً في Supabase: لوحة التحكم → SQL Editor → New query → الصق والتشغيل.
-- لا يمكن لأي أداة آلية هنا الوصول لمشروع Supabase الخاص بك وتنفيذه نيابة عنك.

create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text unique not null,
  phone text,
  country text,
  created_at timestamp default now()
);

-- تفعيل Row Level Security إلزامي في مشاريع Supabase الحديثة.
-- بدونه، وبدون سياسة صريحة، ستُرفض كل محاولة إدراج من المتصفح.
alter table waitlist enable row level security;

-- التسجيل هنا بدون تسجيل دخول (بريد فقط، بدون OTP)، فالطلب يصل بمفتاح anon العام —
-- لذا السياسة تسمح لأي زائر (anon) بإضافة صف، لكن بدون صلاحية قراءة الجدول من المتصفح.
create policy "anyone can join waitlist"
  on waitlist for insert
  to anon
  with check (true);
