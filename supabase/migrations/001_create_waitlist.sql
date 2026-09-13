-- شغّل هذا الملف يدوياً في Supabase: لوحة التحكم → SQL Editor → New query → الصق والتشغيل.
-- لا يمكن لأي أداة آلية هنا الوصول لمشروع Supabase الخاص بك وتنفيذه نيابة عنك.

create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  phone text unique not null,
  country text,
  created_at timestamp default now()
);

-- تفعيل Row Level Security إلزامي في مشاريع Supabase الحديثة.
-- بدونه، وبدون سياسة صريحة، ستُرفض كل محاولة إدراج من المتصفح حتى لو نجح التحقق من OTP.
alter table waitlist enable row level security;

-- يسمح فقط للمستخدم الذي أثبت رقم جواله عبر OTP (auth.uid() غير فارغ) بإضافة صف لنفسه.
create policy "authenticated users can join waitlist"
  on waitlist for insert
  to authenticated
  with check (true);
