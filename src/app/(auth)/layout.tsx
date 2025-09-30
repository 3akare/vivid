type AuthLayoutProps = {
  children: React.ReactNode
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {children}
    </div>)
}
