import { useState } from "react"

export default function RegisterPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
    ciudad: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmar) {
      setError('Las contraseñas no coinciden')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Registro enviado: ' + form.email)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-sm md:max-w-md p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.svg" alt="TruequeCun" className="w-16 h-16 mb-3" />
          <h1 className="text-2xl font-bold">
            <span className="text-gray-800">Trueque</span>
            <span className="text-orange-500">Cun</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Crea tu cuenta gratis</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Ciudad / Colonia</label>
            <input
              type="text"
              name="ciudad"
              placeholder="Ej. Cancún, SM 64"
              value={form.ciudad}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmar"
              placeholder="••••••••"
              value={form.confirmar}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2 transition-colors disabled:opacity-60"
          >
            {loading ? 'Creando cuenta...' : 'Registrarse'}
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-orange-500 font-medium hover:underline">
            Inicia sesión
          </a>
        </p>

      </div>
    </div>
  )
}