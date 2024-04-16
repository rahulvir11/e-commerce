const {z} = require("zod");
const new_product = z.object({
    homeNo:z
    .number({required_error:"please enter home no."})
    .min(2,"home number must be 2 digite"),
    subdistrict:z
    .string({required_error:"village name is required."})
    .trim()
    .min(5,{message:"village name must be at lest of 5 chars."})
    .max(25,{message:"village name must not be more than 25 charactrs."}),
    district:z
    .string({required_error:"district name is required."})
    .trim()
    .min(5,{message:"district name must be at lest of 5 chars."})
    .max(25,{message:"district name must not be more than 25 charactrs."}),
    state:z
    .string({required_error:"state name is required."}).trim()
    .min(4,{message:"state name must be at lest of 4 chars."})
    .max(25,{message:"state name must not be more than 25 charactrs."}),
    country:z
    .string({required_error:"country stock is required."}).trim()
    .min(4,{message:"country name must be at lest of 4 chars."})
    .max(25,{message:"country name must not be more than 25 charactrs."}),
    pinCode:z
    .number(true,{message:"pinCode is required."})
    .min(6,{message:"pinCode name must be at lest of 6 chars."})
});

const validateAddress  = async (req, res, next) => {
  try {
      const data = await new_product.parseAsync(req.body.address);
      req.body.address = data;
      next();
  } catch (err) {
    res.status(400).json({ error: err.errors[0].message});
  }
}

module.exports = validateAddress;
