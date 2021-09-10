var config = {
    authority: "https://localhost:5002",
    client_id: "mpos",
    redirect_uri: "https://localhost:5112/callback.html",
    response_type: "code",
    scope:"openid profile offline_access",
    post_logout_redirect_uri : "https://localhost:5112/index.html",
    filterProtocolClaims: true,
    loadUserInfo: false
};
var apiCall = "https://localhost:5023/api/Product/products";