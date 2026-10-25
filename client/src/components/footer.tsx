const link = "inline-flex items-center min-h-[44px] hover:text-blue-800 transition-colors";

export function Footer() {
  return (
    <footer className="pt-6 pb-24 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-slate-600">
          <span>© 2026 Rezwan Islam · New York</span>
          <a className={link} href="mailto:rezwan99@gmail.com">Email</a>
          <a className={link} href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className={link} href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </p>
      </div>
    </footer>
  );
}
