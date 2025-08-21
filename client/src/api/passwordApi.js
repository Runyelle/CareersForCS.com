import client from "./clientApi"

export const forgotPassword = (email) =>
    client.post("/password/forgot-password", {email});


export const verifyOTP = (email, otp) =>
    client.post("/otp/verify-reset-otp", {email, otp});

export const setPassword = (email, newPassword) =>
    client.post("/password/set-password", {email, newPassword});