import os.path

import pandas


dataset = pandas.read_csv(os.path.join('..', 'datasets', 'xato-net-10-million-passwords.txt'))

print('cioa')

print(dataset.shape)