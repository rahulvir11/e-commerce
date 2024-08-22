const {z} = require("zod");
const singupSchema = z.object({
    name:z
    .string({required_error:"name is required."})
    .trim()
    .min(3,{message:"Must be 3 or more characters long"})
    .max(25,{message:"name must not be more than 25 charactrs."}),
    image:z.string().optional(),
    email:z
    .string({required_error:"email is required."})
    .trim()
    .email({message:"Invalid email address"})
    .min(10,{message:"emailmust be at lest of 3 chars."})
    .max(255,{message:"email must not be more than 255 charactrs."})
    .endsWith(".com", { message: "Only .com domains allowed" }),
    gender:z
    .string({required_error:"gender is required."}),
    dob:z.coerce.date(),
    password:z
    .string({required_error:"password is required."})
    .trim()
    .min(6,{message:"password must be at lest of 6 chars."})
    .max(20,{message:"password must not be more than 20 charactrs."}),
    
    cpassword:z
    .string({required_error:"confirm password is required."})
    .trim()
    .min(6,{message:"password must be at lest of 6 chars."})
    .max(20,{message:"password must not be more than 20 charactrs."}),
 
   
});

const validateSignup  = async (req, res, next) => {
  try {
    // console.log(req.body);
      const data = await singupSchema.parseAsync(req.body);
      req.body = data;
      next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.errors[0].message });
  }
}

module.exports = validateSignup;