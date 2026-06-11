import { useState } from "react"
import { supabase } from "./Data/supaBaseClient"

function ResetPassword() {
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleReset = async () => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setMessage("Error: " + error.message)
    } else {
      setMessage("Password berhasil diubah!")
    }
  }

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Password baru"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleReset}>Simpan Password Baru</button>
      <p>{message}</p>
    </div>
  )
}

export default ResetPassword