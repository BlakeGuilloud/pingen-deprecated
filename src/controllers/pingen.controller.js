import * as pingenService from '../db/services/pingen.service';

export function register(req, res) {
  Promise.resolve()
    .then(() => pingenService.register(req.body))
    .then((id) => res.status(200).json(id))
    .catch((err) => console.log(err));
}
