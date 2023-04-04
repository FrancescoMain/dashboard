import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { addToProject } from '../../../redux/projects/projectSlice';
import { Project } from '../../../redux/projects/type';
import { Box, Button, Form, Input, Textarea } from './AddProjectFormStyle';
import { useAppSelector } from '../../../redux/store';

const ProjectSchema = z.object({
  title: 
  z.string()
  .min(3, { message: "Il titolo deve contenere un minimo di 3 caratteri"})
  .max(20, { message: "Il titolo deve contenere un massimo di 20 caratteri"}),
  description: 
  z.string()
  .min(10, { message: "La descrizione deve contenere un minimo di 10 caratteri"})
  .max(500, { message: "La descrizione deve contenere un massimo di 500 caratteri"}),
  deadline: 
  z.string()
  .transform(str => new Date(str)),
  company: 
  z.string()
  .min(3, { message: "L'azienda deve contenere un minimo di 3 caratteri"})
  .max(20, { message: "L'azienda deve contenere un massimo di 20 caratteri"}),
  assigned_to:
  z.string()
});

const AddProjectForm = () => {
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users);
  console.log(users);
  const { zodResolver } = require('@hookform/resolvers/zod');
  const { register, handleSubmit, formState: { errors } } = useForm<Project>({ resolver: zodResolver(ProjectSchema)});

  const onSubmit = (data: Project) => {
    const deadlineDate = new Date(data.deadline);
    const newProject: Project = {
      ...data,
      deadline: deadlineDate
    };
    console.log(data);
    dispatch(addToProject(newProject));
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1'>
          <div>
            <label>
              Title:
            </label>
          </div>
          <Input type="text" {...register('title', { required: true})} />
          {errors.title && <small className='text-danger'>{errors.title.message}</small>}
        </div>
        <div className='mb-1'>
          <div>
            <label>
              Description:
            </label>
          </div>
          <Textarea
            cols={50}
            rows={10}
          {...register('description', { required: true})} />
          {errors.description && <small className='text-danger'>{errors.description.message}</small>}
        </div>
        <div className='mb-1'>
          <div>
            <label>
              Deadline:
            </label>
          </div>
          <Input type="date" {...register('deadline', { required: true})} />
          {errors.deadline && <small className='text-danger'>{errors.deadline.message}</small>}
        </div>
        <div className='mb-1'>
          <div>
          <label>
            Company:
          </label>
          </div>
          <Input type="text" {...register('company', { required: true})} />
          {errors.company && <small className='text-danger'>{errors.company.message}</small>}
        </div>
        <div className='mb-1'>
          <div>
            <label>
              Assegnato a:
            </label>
          </div>
          <select {...register('assigned_to')}>
          <option disabled selected>Seleziona</option>
            {users.map((user, index) => (
              <option key={index} value={user.username}>{user.username}</option>
            ))}
          </select>
        </div>
        <Button type="submit">Invia</Button>
      </Form>
    </Box>
  );
}

export default AddProjectForm