const {z} = require("zod");
const new_product = z.object({
    image:z
    .string({required_error:"please enter image url"}),
    pDescription:z
    .string({required_error:"product description is required."})
    .trim()
    .min(5,{message:"product description must be at lest of 5 chars."})
    .max(100,{message:"product description must not be more than 100 charactrs."}),
    pName:z
    .string({required_error:"product name is required."})
    .trim()
    .min(5,{message:"product name must be at lest of 5 chars."})
    .max(25,{message:"product name must not be more than 25 charactrs."}),
    pPrice:z
    .number({required_error:"product price is required."}),
    pStock:z
    .number({required_error:"product stock is required."}),
    pCategories:z
    .string({required_error:"product categories is required."})
    .trim()
   
});

const validateProduct  = async (req, res, next) => {
  try {
    // console.log(req.body);
      const data = await new_product.parseAsync(req.body);
      req.body = data;
      next();
  } catch (err) {
    res.status(400).json({ error: err.errors[0].message });
  }
}

module.exports = validateProduct;
