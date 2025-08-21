import client from "./clientApi"

export const verifyOTP = (email, otp) =>
    client.post("/otp/verify-reset-otp", {email, otp});