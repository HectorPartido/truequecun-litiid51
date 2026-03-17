import { useState } from "react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setEnviado(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-sm md:max-w-md p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.svg" alt="TruequeCun" className="w-16 h-16 mb-3" />
          <h1 className="text-2xl font-bold">
            <span className="text-gray-800">Trueque</span>
            <span className="text-orange-500">Cun</span>
          </h1>
        </div>

        {enviado ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-green-100 text-green-700 rounded-xl px-6 py-4 text-sm">
              Te enviamos un correo a <strong>{email}</strong> con instrucciones para restablecer tu contraseña.
            </div>
            <a href="/login" className="text-orange-500 text-sm font-medium hover:underline">
              Volver al inicio de sesión
            </a>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 text-center mb-6">
              Ingresa tu correo y te enviaremos instrucciones para restablecer tu contraseña.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2 transition-colors disabled:opacity-60"
              >
                {loading ? 'Enviando...' : 'Enviar instrucciones'}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              <a href="/login" className="text-orange-500 font-medium hover:underline">
                Volver al inicio de sesión
              </a>
            </p>
          </>
        )}

      </div>
    </div>
  )
}