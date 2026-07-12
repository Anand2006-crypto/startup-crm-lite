import { useState } from "react";


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

  return (
  <div
    style={{
      padding: "80px",
      color: "white",
    }}
  >
      
      <h1
  style={{
    color: darkMode ? "white" : "black",
    fontSize: "32px",
    marginBottom: "20px"
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
      border: "4px solid #2563eb",
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
  color: darkMode ? "white" : "black",
  background: darkMode ? "#1f2937" : "#ffffff",
  padding: "8px",
  borderRadius: "8px",
}}
/>


      <div
  style={{
    marginTop: "20px",
    background: "#1f2937",
    padding: "25px",
    borderRadius: "15px",
    width: "400px",
  }}
>
        <input
  type="text"
 value={name}
onChange={(e) => setName(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
  }}
/>

<input
  type="email"
 value={email}
onChange={(e) => setEmail(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
  }}
/>

<input
  type="password"
 value={password}
onChange={(e) => setPassword(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
  }}
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
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  }}
>
  Save Changes
</button>  
    </div>
    </div>
 );
}

export default Profile;