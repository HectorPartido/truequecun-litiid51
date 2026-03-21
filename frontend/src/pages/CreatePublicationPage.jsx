import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePublications } from '../context/PublicationsContext'

export default function CreatePublicationPage() {
  const navigate = useNavigate()
  const { agregarPublicacion } = usePublications()

  const [form, setForm] = useState({
    type: 'Objetos',
    title: '',
    description: '',
    condition: '',
    category: '',
    images: []
  })
  const [categoriaInput, setCategoriaInput] = useState('')
  const [categorias, setCategorias] = useState([])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const agregarCategoria = (e) => {
    if (e.key === 'Enter' && categoriaInput.trim()) {
      e.preventDefault()
      if (!categorias.includes(categoriaInput.trim())) {
        setCategorias([...categorias, categoriaInput.trim()])
      }
      setCategoriaInput('')
    }
  }

  const quitarCategoria = (cat) => {
    setCategorias(categorias.filter(c => c !== cat))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setForm(prev => ({
        ...prev,
        images: [...prev.images, reader.result]
      }))
    }
    reader.readAsDataURL(file)
  }

  const quitarImagen = (index) => {
    setForm(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    agregarPublicacion({
      id: Date.now(),
      type: form.type,
      title: form.title,
      description: form.description,
      condition: form.condition,
      category: categorias.join(', '),
      image: form.images[0] || null,
      status: 'Activa',
      user: { name: 'Yo', rating: 5 }
    })
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-[#F5F0EB] pb-10">

      {/* Header */}
      <header className="px-4 pt-6 pb-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-gray-700 text-xl">←</button>
        <h1 className="text-lg font-bold text-gray-800">Nuevo trueque</h1>
      </header>

      <form onSubmit={handleSubmit} className="px-4 flex flex-col gap-5">

        {/* Tipo */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">¿Qué quieres intercambiar?</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setForm({ ...form, type: 'Objetos' })}
              className={`flex flex-col items-center justify-center py-4 rounded-xl border-2 text-sm font-medium transition-colors ${form.type === 'Objetos' ? 'border-orange-500 bg-orange-50 text-orange-600' : 'border-gray-200 bg-white text-gray-600'}`}
            >
              <span className="text-2xl mb-1">📦</span>
              Objeto
              <span className="text-xs font-normal text-gray-400">Artículo físico</span>
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, type: 'Servicio' })}
              className={`flex flex-col items-center justify-center py-4 rounded-xl border-2 text-sm font-medium transition-colors ${form.type === 'Servicio' ? 'border-orange-500 bg-orange-50 text-orange-600' : 'border-gray-200 bg-white text-gray-600'}`}
            >
              <span className="text-2xl mb-1">🕐</span>
              Servicio
              <span className="text-xs font-normal text-gray-400">Lo que sabes hacer</span>
            </button>
          </div>
        </div>

        {/* Título */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            name="title"
            placeholder="Ej. Espejo de pared..."
            value={form.title}
            onChange={handleChange}
            required
            className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Descripción */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            name="description"
            placeholder="Describe el artículo, su estado, características..."
            value={form.description}
            onChange={handleChange}
            required
            rows={4}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
          />
        </div>

        {/* Fotos */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Fotos <span className="text-gray-400 font-normal">(Mínimo 1, máximo 4)</span>
          </label>
          <div className="flex gap-3 mt-2 flex-wrap">
            {form.images.map((img, i) => (
              <div key={i} className="relative w-20 h-20">
                <img src={img} className="w-20 h-20 object-cover rounded-xl" />
                <button
                  type="button"
                  onClick={() => quitarImagen(i)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ))}

            {form.images.length < 4 && (
              <label className="w-20 h-20 bg-white border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-2xl cursor-pointer">
                +
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>
        </div>

        {/* Estado */}
        <div>
          <label className="text-sm font-medium text-gray-700">Estado del artículo</label>
          <div className="flex gap-3 mt-2">
            {['Nuevo', 'Seminuevo', 'Usado'].map(est => (
              <button
                key={est}
                type="button"
                onClick={() => setForm({ ...form, condition: est })}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${form.condition === est ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-600 border-gray-300'}`}
              >
                {est}
              </button>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div>
          <label className="text-sm font-medium text-gray-700">Categorías</label>
          <input
            type="text"
            placeholder="Escribe una categoría y presiona Enter"
            value={categoriaInput}
            onChange={(e) => setCategoriaInput(e.target.value)}
            onKeyDown={agregarCategoria}
            className="mt-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {categorias.map(cat => (
              <span key={cat} className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                {cat}
                <button type="button" onClick={() => quitarCategoria(cat)} className="font-bold">×</button>
              </span>
            ))}
          </div>
        </div>

        {/* Botón publicar */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl py-3 transition-colors mt-2"
        >
          Publicar
        </button>

      </form>
    </div>
  )
}