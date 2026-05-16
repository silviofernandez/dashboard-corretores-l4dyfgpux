import { Component, ReactNode, ErrorInfo } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('CRITICAL UI ERROR CAUGHT BY BOUNDARY:', error.message)
    console.error('Stack trace:', errorInfo.componentStack)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4 animate-fade-in-up">
          <div className="bg-red-50 text-red-500 p-4 rounded-full mb-4 shadow-sm border border-red-100">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-slate-800 mb-2">
            Ops! Algo deu errado.
          </h1>
          <p className="text-slate-500 font-medium max-w-md">
            Ocorreu um erro inesperado ao carregar esta seção. Nossa equipe já foi notificada e
            estamos trabalhando nisso.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Tentar Novamente
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
