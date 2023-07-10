import axios from "axios"

enum TMethod {
  GET = "GET",
  POST = "POST",
}

export const fetchData = async (url: string, method: TMethod, data: any = {}) => {
  const options = {
    method,
    url,
    data,
  }
  try {
    const res = await axios(options)
    if (!res.success) throw new Error(res.msg)
  } catch (e) {
    console.error(e)
  }
}
