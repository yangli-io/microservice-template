import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import YAML from 'yamljs';

const swaggerFile = fs.readFileSync(path.join(process.cwd(), 'swagger.yml')).toString();

const swaggerDocument = YAML.parse(swaggerFile);

const router = express.Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

export default router;
