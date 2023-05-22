export default {
  Domain: function () {
    return window.location.hostname.includes("localhost")
      ? "http://127.0.0.1:8081"
      : "";
  },
  ApiHeader: function (Authorization, PageCount) {
    if (Authorization == null) {
      return {
        headers: {
          "Content-Type": "application/json",
          Authorization: Authorization != null ? "Bearer " + Authorization : "",
          paginate: PageCount,
        },
      };
    } else {
      return {
        headers: {
          "Content-Type": "application/json",
          Authorization: Authorization != null ? "Bearer " + Authorization : "",
          paginate: PageCount,
        },
      };
    }
  },

  Storage() {
    return "bmV4dGVjaw==";
  },

  // /api/category
  APICategory() {
    return "L2FwaS9jYXRlZ29yeQ==";
  },
  // /api/category
  APIProduct() {
    return "L2FwaS9wcm9kdWN0";
  },
};
