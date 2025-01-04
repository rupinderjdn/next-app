import React from 'react'


interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className='flex flex-row'>
        <aside className='bg-slate-600 h-screen w-1/4'>
            <h1>Admin Layout</h1>
        </aside>
      <div className='w-3/4'>
            {children}
        </div>
    </div>
  )
}

export default AdminLayout
