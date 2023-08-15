export default function SigninLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="flex justify-center items-center mt-16 mb-16">
            {children}
        </section>
    )
  }