import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/app/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log(data)
      if (data.success) {
        navigate('/dashboard')
      } else {
        alert(data.message || 'Login failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert(`Connection error: ${error instanceof Error ? error.message : 'Unknown error'}\n\nPlease make sure PHP server is running:\n\nRun this command in terminal:\nnpm run php\n\nOr manually:\nphp -S localhost:8000 -t . router.php`)
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="username" placeholder="Email & Username" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}