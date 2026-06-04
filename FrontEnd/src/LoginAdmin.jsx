import { useState } from "react";
import styles from "./LoginAdmin.module.css";

export default function LoginPage() {
  const [screen, setScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    loginEmail: "",
    loginPass: "",
    forgotEmail: "",
  });

  const [sentEmail, setSentEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const changeScreen = (screenName) => {
    setErrors({});
    setLoading(false);
    setScreen(screenName);
  };

  const handleLogin = () => {
    const newErrors = {};

    if (!validateEmail(form.loginEmail)) {
      newErrors.loginEmail = "Insira um e-mail válido.";
    }

    if (!form.loginPass.trim()) {
      newErrors.loginPass = "Insira sua senha.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Login realizado");
    }, 2000);
  };

  const handleReset = () => {
    if (!validateEmail(form.forgotEmail)) {
      setErrors({
        forgotEmail: "Insira um e-mail válido.",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSentEmail(form.forgotEmail);
      setScreen("sent");
    }, 1800);
  };

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        {screen === "login" && (
          <>
            <h2>Bem-vindo de volta</h2>
            <p>Entre na sua conta para continuar</p>

            <div className={styles.field}>
              <label>E-mail</label>

              <input
                type="email"
                name="loginEmail"
                placeholder="seu@email.com"
                value={form.loginEmail}
                onChange={handleChange}
              />

              {errors.loginEmail && (
                <span className={styles.errorMsg}>{errors.loginEmail}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Senha</label>

              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="loginPass"
                  placeholder="••••••••"
                  value={form.loginPass}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>

              {errors.loginPass && (
                <span className={styles.errorMsg}>{errors.loginPass}</span>
              )}
            </div>

            <button
              type="button"
              className={styles.linkBtn}
              onClick={() => changeScreen("forgot")}
            >
              Esqueci minha senha
            </button>

            <button
              className={styles.btnPrimary}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </>
        )}

        {screen === "forgot" && (
          <>
            <button
              className={styles.backBtn}
              onClick={() => changeScreen("login")}
            >
              Voltar
            </button>

            <h2>Redefinir senha</h2>

            <p>
              Informe o e-mail cadastrado para receber o link de recuperação.
            </p>

            <div className={styles.field}>
              <label>E-mail</label>

              <input
                type="email"
                name="forgotEmail"
                placeholder="seu@email.com"
                value={form.forgotEmail}
                onChange={handleChange}
              />

              {errors.forgotEmail && (
                <span className={styles.errorMsg}>{errors.forgotEmail}</span>
              )}
            </div>

            <button
              className={styles.btnPrimary}
              onClick={handleReset}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar link"}
            </button>
          </>
        )}

        {screen === "sent" && (
          <>
            <h2>E-mail enviado!</h2>

            <p>Enviamos um link de recuperação para:</p>

            <strong>{sentEmail}</strong>

            <button
              className={styles.btnPrimary}
              onClick={() => changeScreen("login")}
            >
              Voltar ao login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
