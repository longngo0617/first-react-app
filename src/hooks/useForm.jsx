import  { useState } from "react";
const useForm = (initValue, rules) => {
  const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const patternPhone = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  const patternURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  let [form, setForm] = useState(initValue);
  let [errors, setErrors] = useState({});


  function inputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  }
  function Submit() {
    let { validate,message } = rules;
    let errorObj = {};
    for (let i in validate) {
      if (i in form) {
        if (validate[i].required) {
          if (!form[i]) {
            errorObj[i] = message?.[i]?.required || "Trường này là bắt buộc";
          }
        }

        if (validate[i].pattern) {
          let pattern = validate[i].pattern;
          if (validate[i].pattern === "email") pattern = patternEmail;
          if (validate[i].pattern === "phone") pattern = patternPhone;
          if (validate[i].pattern === "url") pattern = patternURL;
          
          if (!pattern.test(form[i])) {
            errorObj[i] = message?.[i]?.pattern || "Không đúng định dạng";
          }
        }
      }
    }
    setErrors(errorObj);
    return Object.keys(errorObj).length >0;
  }
  return {
    data: form,
    errors,
    inputChange,
    Submit,
  };
};

export { useForm };
