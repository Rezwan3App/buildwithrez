export function Footer() {
  return (
    <footer className="py-8 bg-[#080a0e] border-t border-teal-500/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-medium bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
            Rezwan Islam
          </p>
          <p className="text-gray-600 text-xs mt-1.5 sm:mt-0">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
