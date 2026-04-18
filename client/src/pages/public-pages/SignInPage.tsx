import { SignInForm } from "@/components/signin/SignInForm";
import Logo from "@/components/Logo";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] px-4">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <Logo />
        <h1 className="text-4xl md:text-5xl font-heading mt-4">Open your Journal</h1>
        <p className="text-muted-foreground max-w-sm">
          Your private space for reflections is just a sign-in away.
        </p>
      </div>
      <div className="w-full max-w-sm bg-card p-8 rounded-2xl border border-border shadow-xl relative overflow-hidden">
        {/* Notebook spine effect */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/10 border-r border-border/50" />
        <SignInForm className="max-w-none" />
      </div>
    </div>
  )
}

export default SignInPage