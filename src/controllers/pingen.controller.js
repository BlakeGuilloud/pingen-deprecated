import * as pingenService from '../db/services/pingen.service';

export function register(req, res) {
  Promise.resolve()
    .then(() => pingenService.register(req.body))
    .then((id) => res.status(200).json(id))
    .catch((err) => console.log(err));
}

export function requestPin(req, res) {
  Promise.resolve()
    .then(() => pingenService.requestPin(req.params.id))
    .then((id) => res.status(200).json(id))
    .catch((err) => console.log(err));
}

export function verify(req, res) {
  console.log('req body', req.body.pin);
  Promise.resolve()
    .then(() => pingenService.verify(req.body.pin))
    .then((user) => res.status(200).json(user))
    .catch((err) => console.log(err));
}
