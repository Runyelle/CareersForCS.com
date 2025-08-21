import client from "./clientApi";

//step 1 give email
export const signupEmail = (email) =>
    client.post("/auth/signup/email", {email});

//step 2 give code from email
export const signupVerify = (email, otp) =>
    client.post("/auth/signup/verify", {email, otp});

//step 3 give user data (username, password, and socials)
export const signupComplete = (data) =>
    client.post("/auth/signup/complete",data);

//login to account for token
export const login = (email, password) =>
    client.post("/auth/login", {email, password});
