// Its main purpose is to define the expected shape and 
// types of your data and then validate that the actual data received 
// (especially from external sources like APIs) conforms to that structure.
import { z } from 'zod';
import axios from 'axios';


const url = 'https://www.course-api.com/react-tours-project';

export const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    info: z.string(),
    price: z.string(),
    // something: z.string(),会导致error
})

export type Tour = z.infer<typeof tourSchema>

export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url);
  console.log('response:',response)
  const result = tourSchema.array().safeParse(response.data);
  console.log('result:',result)
  if (!result.success) {
    throw new Error('Parsing failed');
  }
  return result.data;
};
