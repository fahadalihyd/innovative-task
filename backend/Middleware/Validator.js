import { error as custom_error} from "../Helpers/index.js";
/**
 * Validate that a resource being POSTed or PUT
 * has a valid shape, else return 400 Bad Request
 * @param {*} resourceSchema is a yup schema
 */
 const validateResourceYup = (resourceSchema) => async (req, res, next) => {
    const resource = req.body;
    try {
      // throws an error if not valid
      await resourceSchema.validate(resource);
      next();
    } catch (e) {
      console.error(e);
      res.status(400).json(custom_error(e.errors.join(', ')));
    }
  };
  
  export default validateResourceYup;