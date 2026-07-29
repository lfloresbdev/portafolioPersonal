import { TerminalLogo } from '@/components/ui/terminal-logo'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <TerminalLogo lines={["LEONARDO FLORES", "DEVELOPER"]} speed={120} />
    </div>
  );
}

export default App;