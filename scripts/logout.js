function logout() {
    localStorage.clear();
    alert("Вы вышли из системы!");
    window.location.replace('http://urbas/');
}