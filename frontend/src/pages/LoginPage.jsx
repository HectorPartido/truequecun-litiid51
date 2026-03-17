import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    // simulacion de llamda al back
    setTimeout(() => {
      setLoading(false)
      alert('Login enviado: ' + email)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-sm md:max-w-md p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.svg" alt="TruequeCun" className="w-20 h-20 mb-3" />
          <h1 className="text-2xl font-bold">
            <span className="text-gray-800">Trueque</span>
            <span className="text-orange-500">Cun</span>
          </h1>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Correo electrónico</label>
            <input
              type="email"
              placeholder="tucorreo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="text-right">
              <a href="/forgot-password" className="text-orange-500 text-sm hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2 transition-colors disabled:opacity-60"
          >
            {loading ? 'Iniciando...' : 'Iniciar sesión'}
          </button>

        </form>

        {/* Registro */}
        <p className="text-center text-sm text-gray-500 mt-6">
          ¿No tienes cuenta?{' '}
          <a href="/register" className="text-orange-500 font-medium hover:underline">
            Regístrate gratis
          </a>
        </p>

      </div>
    </div>
  )
}