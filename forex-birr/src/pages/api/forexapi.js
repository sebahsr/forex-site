import axios from "axios";
export default async function getLatest() {
  // Sample data, replace with actual API call or database query
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "latest";

  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined in .env.local");
  }

  try {
    const response = axios.get(apiUrl).then((res) => {
      return res.data;
    });
    return response
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return error;
  }
}
