import numpy as np
import pandas as pd

SERIES_COUNT = 1000
SERIES_VC_MIN = 1000
SERIES_VC_MAX = 1000


def main():
    data = []

    for i in range(SERIES_COUNT):
        length = np.random.randint(SERIES_VC_MIN, SERIES_VC_MAX)
        for t in range(length):
            data += [{
                's_id': i,
                'ts': t * 1000,
                'value': np.random.normal()
            }]

    df = pd.DataFrame(data).reset_index().rename(columns={'index': 'id'})
    df = df.sample(frac=1)
    df.to_csv('1k_timeseries.csv', index=False)


if __name__ == '__main__':
    main()
