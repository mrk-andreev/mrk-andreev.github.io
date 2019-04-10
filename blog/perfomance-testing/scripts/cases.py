import matplotlib.pyplot as plt

if __name__ == '__main__':
    curves = [
        {
            'label': 'Load test',
            'profile': [0, 1, 1, 0]
        },
        {
            'label': 'Stress test',
            'profile': [0, 1, 1, 2, 2, 3, 3]
        },
        {
            'label': 'Endurance test',
            'profile': [0] + [1] * 8 + [0]
        },
        {
            'label': 'Peak test',
            'profile': [0, 1, 2, 1, 1, 3, 1, 1]
        }
    ]

    f, ax = plt.subplots(ncols=len(curves), figsize=(10, 4), sharey=True)
    for i, curve in enumerate(curves):
        ax[i].set_xlabel('time')
        ax[i].set_ylabel('activity')
        ax[i].set_title(curve['label'])
        ax[i].plot(curve['profile'])

    f.savefig('../images/tests_profiles.png')
