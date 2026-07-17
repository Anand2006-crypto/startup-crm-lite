import { useState } from "react";
import { getTheme } from "../theme/tokens";


function Profile({ darkMode }) {
  const user = JSON.parse(
    localStorage.getItem("user")
  );
  const [name, setName] = useState(user?.name || "");
const [email, setEmail] = useState(user?.email || "");
const [password, setPassword] = useState(user?.password || "");
const [profileImage, setProfileImage] = useState(
  localStorage.getItem("profileImage") ||
    "https://i.pravatar.cc/150"
);

  const t = getTheme(darkMode)

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: `1px solid ${t.border}`,
    background: t.inputBg,
    color: t.text,
    fontSize: "15px",
  }

  return (
  <div
    style={{
      padding: "60px",
      color: t.text,
    }}
  >
      
      <h1
  style={{
    color: t.text,
    fontSize: "32px",
    marginBottom: "24px",
  }}
>
  👤 My Profile
</h1>
  <img
   src={profileImage}
    alt="Profile"
    style={{
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      border: `4px solid ${t.accent}`,
      boxShadow: t.shadowMd,
    }}
  />
 <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);

        localStorage.setItem(
          "profileImage",
          reader.result
        );
      };

      reader.readAsDataURL(file);
    }
  }}
  style={{
  marginTop: "15px",
  color: t.text,
  background: t.surface,
  padding: "10px",
  borderRadius: "10px",
  border: `1px solid ${t.border}`,
}}
/>


      <div
  style={{
    marginTop: "24px",
    background: t.surface,
    padding: "28px",
    borderRadius: "16px",
    width: "420px",
    border: `1px solid ${t.border}`,
    boxShadow: t.shadow,
  }}
>
        <input
  type="text"
 value={name}
onChange={(e) => setName(e.target.value)}
  style={inputStyle}
/>

<input
  type="email"
 value={email}
onChange={(e) => setEmail(e.target.value)}
  style={inputStyle}
/>

<input
  type="password"
 value={password}
onChange={(e) => setPassword(e.target.value)}
  style={inputStyle}
/>

<button
  onClick={() => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    alert("Profile updated successfully");
  }}
  style={{
    width: "100%",
    padding: "13px",
    border: "none",
    borderRadius: "10px",
    background: t.accent,
    color: t.textInverse,
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: t.shadow,
  }}
>
  Save Changes
</button>  
    </div>
    </div>
 );
}

export default Profile;
