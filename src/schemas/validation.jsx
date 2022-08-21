import * as yup from  "yup"

export const signupschema = yup.object({
name:yup.string().min(2).max(25).required("Please enter your name"),
number: yup.string().required("please enter your number")

})
