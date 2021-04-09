const dataset1 = [
	{
		'Academic Year': 2019,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 116,
		'Scholarship FTE': 110,
		'Scholarship Dollars': 283678.41
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 128,
		'Scholarship FTE': 121.5,
		'Scholarship Dollars': 285594.23
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 3700
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 35,
		'Scholarship Dollars': 118314
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5565,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 5655
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5110,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY - GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 54,
		'Scholarship Dollars': 162000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 23,
		'Scholarship Dollars': 44266
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 17,
		'Scholarship Dollars': 23615
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 80.5,
		'Scholarship Dollars': 69840
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 14806
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 18.17,
		'Scholarship Dollars': 25557.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5640,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5515,
		'Federal School Code': 2783,
		'TAP College Name': 'NEW YORK LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 106,
		'Scholarship FTE': 99,
		'Scholarship Dollars': 248968.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5100,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 64,
		'Scholarship Dollars': 408524.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 11.75,
		'Scholarship Dollars': 48857.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 123,
		'Scholarship FTE': 110.25,
		'Scholarship Dollars': 158818.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1610,
		'Federal School Code': 11614,
		'TAP College Name': 'CHAMPLAIN VLY SCHL OF RADIOLOGY',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 450
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 45.75,
		'Scholarship Dollars': 342633.7
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 4000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 60,
		'Scholarship FTE': 54.5,
		'Scholarship Dollars': 151543.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 32.5,
		'Scholarship Dollars': 111940
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 21525
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 61,
		'Scholarship Dollars': 105502
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 11.88,
		'Scholarship Dollars': 177855.89
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 90,
		'Scholarship FTE': 78.25,
		'Scholarship Dollars': 294200
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5915,
		'Federal School Code': 20754,
		'TAP College Name': 'KELLER GRAD SCHOOL OF MANAGEMENT',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 68708.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 656,
		'Scholarship FTE': 440.04,
		'Scholarship Dollars': 690203.81
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5300,
		'Federal School Code': 2749,
		'TAP College Name': 'N Y COL OF PODIATRIC MEDICINE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 607,
		'Scholarship FTE': 559.5,
		'Scholarship Dollars': 729103.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5040,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 317,
		'Scholarship FTE': 280.42,
		'Scholarship Dollars': 727463.41
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 11.5,
		'Scholarship Dollars': 118682.24
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 97,
		'Scholarship FTE': 82.5,
		'Scholarship Dollars': 490412
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 9.46,
		'Scholarship Dollars': 30699.9
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 30.25,
		'Scholarship Dollars': 68467
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 15280
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 38.67,
		'Scholarship Dollars': 261971.62
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 581,
		'Scholarship FTE': 511.38,
		'Scholarship Dollars': 554491.76
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 65.67,
		'Scholarship Dollars': 108759.11
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 193,
		'Scholarship FTE': 152.63,
		'Scholarship Dollars': 195910.22
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 37.29,
		'Scholarship Dollars': 71601.08
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 59.5,
		'Scholarship Dollars': 70273
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 183,
		'Scholarship FTE': 158.92,
		'Scholarship Dollars': 272952.16
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 142,
		'Scholarship FTE': 120.38,
		'Scholarship Dollars': 228324
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 153,
		'Scholarship FTE': 148,
		'Scholarship Dollars': 423894.96
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 105,
		'Scholarship FTE': 98.38,
		'Scholarship Dollars': 253693.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 56351
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 4129.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 75,
		'Scholarship Dollars': 348484
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5024,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE DELHI NURSING PROG',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 17078.8
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 135,
		'Scholarship FTE': 130.5,
		'Scholarship Dollars': 776688.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 41.5,
		'Scholarship Dollars': 82063.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5210,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 61496
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.67,
		'Scholarship Dollars': 6939.33
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5568,
		'Federal School Code': 9929,
		'TAP College Name': 'SUNY COLLEGE OF OPTOMETRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 570,
		'Scholarship FTE': 427,
		'Scholarship Dollars': 640320.88
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5755,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 17988
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 44.29,
		'Scholarship Dollars': 120664.7
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5672,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 21960
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 23,
		'Scholarship Dollars': 82270.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11.5,
		'Scholarship Dollars': 60245
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5396,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE LAW SCHOOL',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 20.5,
		'Scholarship Dollars': 17700
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 20562.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 86,
		'Scholarship FTE': 84,
		'Scholarship Dollars': 90650
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5215,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 281,
		'Scholarship FTE': 261,
		'Scholarship Dollars': 560022.3
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 16.96,
		'Scholarship Dollars': 128104.39
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 14630
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 60,
		'Scholarship FTE': 53,
		'Scholarship Dollars': 178460.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 2450
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 381,
		'Scholarship FTE': 354.25,
		'Scholarship Dollars': 609195.84
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 1045.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 353,
		'Scholarship FTE': 324.25,
		'Scholarship Dollars': 504809
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 48.5,
		'Scholarship Dollars': 105898
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 26.5,
		'Scholarship Dollars': 55475
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 34.96,
		'Scholarship Dollars': 100432.05
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 46,
		'Scholarship Dollars': 162662.85
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 63.38,
		'Scholarship Dollars': 138244.76
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 376,
		'Scholarship FTE': 338.25,
		'Scholarship Dollars': 1369636.82
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 1700
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 227,
		'Scholarship FTE': 203.25,
		'Scholarship Dollars': 695813.79
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 16.88,
		'Scholarship Dollars': 80478
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 36.75,
		'Scholarship Dollars': 173428.15
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1421,
		'Federal School Code': 42101,
		'TAP College Name': 'CUNY STELLA & CHARLES GUTTMAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 11965.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 325,
		'Scholarship FTE': 308.5,
		'Scholarship Dollars': 375965
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 301,
		'Scholarship FTE': 248.63,
		'Scholarship Dollars': 311684.83
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 16047.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 49.38,
		'Scholarship Dollars': 128032.4
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 36753.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 180,
		'Scholarship FTE': 162.5,
		'Scholarship Dollars': 605223.07
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 22.5,
		'Scholarship Dollars': 36948.69
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 11.17,
		'Scholarship Dollars': 41323
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 60,
		'Scholarship FTE': 58,
		'Scholarship Dollars': 408055.02
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 26.79,
		'Scholarship Dollars': 37775
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 158,
		'Scholarship FTE': 140.75,
		'Scholarship Dollars': 688243.83
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 114,
		'Scholarship FTE': 102.63,
		'Scholarship Dollars': 693245.17
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 60,
		'Scholarship FTE': 55.5,
		'Scholarship Dollars': 466838.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 21425
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 99,
		'Scholarship FTE': 72.71,
		'Scholarship Dollars': 363682.15
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 54.75,
		'Scholarship Dollars': 185971.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 75,
		'Scholarship Dollars': 114379.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 13250
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 50.96,
		'Scholarship Dollars': 98448.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 580,
		'Federal School Code': 42514,
		'TAP College Name': 'ELIM BIBLE INSTITUTE AND COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 15,
		'Scholarship Dollars': 23213.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 23.75,
		'Scholarship Dollars': 109181.22
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5105,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 437,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 113,
		'Scholarship FTE': 106.5,
		'Scholarship Dollars': 84520
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5065,
		'Federal School Code': 7109,
		'TAP College Name': 'SUC OLD WESTBURY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 5547.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 62,
		'Scholarship FTE': 56.75,
		'Scholarship Dollars': 96953.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5155,
		'Federal School Code': 9895,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.88,
		'Scholarship Dollars': 63000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 289,
		'Scholarship FTE': 261,
		'Scholarship Dollars': 565419.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5345,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 12000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7816,
		'Federal School Code': 31207,
		'TAP College Name': 'THE NY CONSERV FOR DRAMATIC ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4.13,
		'Scholarship Dollars': 123294.86
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 7477.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5480,
		'Federal School Code': 2677,
		'TAP College Name': 'BROOKLYN LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.67,
		'Scholarship Dollars': 27319.66
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 89280
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5965,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY-DOCTORAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 17315
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 59836
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5960,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE BLAUVELT-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 194483.96
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5805,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 15.33,
		'Scholarship Dollars': 38351.45
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 53313
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5635,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 6225
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE 4 YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 20.17,
		'Scholarship Dollars': 54812.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 28277.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1950
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 44685
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 8506,
		'Federal School Code': 30962,
		'TAP College Name': 'CHARLES STUART SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 4892.7
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1762.2
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 258,
		'Scholarship FTE': 239.5,
		'Scholarship Dollars': 304656.38
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5216,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 5097.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 14.63,
		'Scholarship Dollars': 143504.13
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 222,
		'Scholarship FTE': 203.63,
		'Scholarship Dollars': 274434.77
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5205,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 42015
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 48,
		'Scholarship FTE': 42.17,
		'Scholarship Dollars': 99027.71
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5200,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 12000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 25.5,
		'Scholarship Dollars': 58278.4
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 18.5,
		'Scholarship Dollars': 48081
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 77,
		'Scholarship Dollars': 466399.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 31495.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 60000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 407,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 2250
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 96,
		'Scholarship FTE': 85.13,
		'Scholarship Dollars': 712204.1
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 7070
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 145,
		'Scholarship FTE': 139.63,
		'Scholarship Dollars': 277235.45
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12,
		'Scholarship Dollars': 17670.68
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 16,
		'Scholarship Dollars': 49631
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 22397.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 605,
		'Federal School Code': 30277,
		'TAP College Name': 'PACIFIC COLLEGE OF ORIENTAL MED',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3535.01
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 12.38,
		'Scholarship Dollars': 24110
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 555,
		'Scholarship FTE': 478,
		'Scholarship Dollars': 582636
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 10.75,
		'Scholarship Dollars': 27051
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 60,
		'Scholarship FTE': 56.5,
		'Scholarship Dollars': 100075
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 11740
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 694,
		'Scholarship FTE': 621,
		'Scholarship Dollars': 1475673.87
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 25.5,
		'Scholarship Dollars': 102474
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 11045
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 15.5,
		'Scholarship Dollars': 61137
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 147,
		'Scholarship FTE': 129.75,
		'Scholarship Dollars': 448407.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1413,
		'Scholarship FTE': 1338.5,
		'Scholarship Dollars': 5443424.31
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 55.5,
		'Scholarship Dollars': 298973.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 117,
		'Scholarship FTE': 108.92,
		'Scholarship Dollars': 285091.46
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 66.88,
		'Scholarship Dollars': 175658.12
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 916,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 6.71,
		'Scholarship Dollars': 46104.38
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 24.96,
		'Scholarship Dollars': 56129.83
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 179,
		'Scholarship FTE': 163.75,
		'Scholarship Dollars': 420278.67
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 15.25,
		'Scholarship Dollars': 215226
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 33,
		'Scholarship Dollars': 377056.19
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 21.54,
		'Scholarship Dollars': 103699
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 36.5,
		'Scholarship Dollars': 126932
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 69,
		'Scholarship Dollars': 59526.76
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 5.04,
		'Scholarship Dollars': 14608.57
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 123,
		'Scholarship FTE': 106.38,
		'Scholarship Dollars': 424334.31
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 313,
		'Scholarship FTE': 282.5,
		'Scholarship Dollars': 558311.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 66,
		'Scholarship Dollars': 117243.95
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 31,
		'Scholarship Dollars': 54938.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 347,
		'Scholarship FTE': 277.96,
		'Scholarship Dollars': 362468.43
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 101,
		'Scholarship FTE': 96.5,
		'Scholarship Dollars': 264500
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 502,
		'Scholarship FTE': 442.17,
		'Scholarship Dollars': 498850.86
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 24.5,
		'Scholarship Dollars': 71428.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 37,
		'Scholarship Dollars': 45729.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 73.33,
		'Scholarship Dollars': 105076.1
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1082,
		'Scholarship FTE': 988.58,
		'Scholarship Dollars': 2639429.91
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 279,
		'Scholarship FTE': 239.92,
		'Scholarship Dollars': 412084.74
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5.38,
		'Scholarship Dollars': 28967.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1249,
		'Scholarship FTE': 1141.92,
		'Scholarship Dollars': 3949600.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 21132
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 299,
		'Scholarship FTE': 283.79,
		'Scholarship Dollars': 850887.63
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 22.5,
		'Scholarship Dollars': 88520
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 27.29,
		'Scholarship Dollars': 82318.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 14.42,
		'Scholarship Dollars': 88521.42
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 121,
		'Scholarship FTE': 110.88,
		'Scholarship Dollars': 431232.36
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 410,
		'Scholarship FTE': 367.25,
		'Scholarship Dollars': 1182430.72
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 24.5,
		'Scholarship Dollars': 49376
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 16090
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 63,
		'Scholarship FTE': 48.67,
		'Scholarship Dollars': 128304.11
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 28495.7
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 144,
		'Scholarship FTE': 124.71,
		'Scholarship Dollars': 274408.02
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 133,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR TRIM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 11825.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 99,
		'Scholarship FTE': 69.33,
		'Scholarship Dollars': 153951.6
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 85,
		'Scholarship FTE': 82.75,
		'Scholarship Dollars': 79025
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 33,
		'Scholarship Dollars': 66072.54
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 753,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIV-WEEKEND COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 166.67
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 725
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 17.46,
		'Scholarship Dollars': 55033
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 143795
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 40.63,
		'Scholarship Dollars': 46976
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 23.92,
		'Scholarship Dollars': 72669.4
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 19.5,
		'Scholarship Dollars': 97110
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 32168
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2321,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INST QRTLY PROGRAMS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.67,
		'Scholarship Dollars': 19098.35
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 140,
		'Scholarship FTE': 131.5,
		'Scholarship Dollars': 308414.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5275,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 12,
		'Scholarship Dollars': 50304
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 136,
		'Scholarship FTE': 132,
		'Scholarship Dollars': 516306.52
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 131,
		'Scholarship FTE': 126.5,
		'Scholarship Dollars': 319410
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 49315
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 38185
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 334,
		'Scholarship FTE': 298.5,
		'Scholarship Dollars': 661287.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 26.96,
		'Scholarship Dollars': 66176
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5151,
		'Federal School Code': 9895,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 86,
		'Scholarship FTE': 84,
		'Scholarship Dollars': 90800
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5220,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY- GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 1400
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 32.5,
		'Scholarship Dollars': 30320
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5235,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 18,
		'Scholarship Dollars': 54000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5320,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 8505,
		'Federal School Code': 10147,
		'TAP College Name': 'WESTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 14090
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5395,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 62135
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 26583.87
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5405,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6870
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 16.5,
		'Scholarship Dollars': 37288.87
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5420,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 44580
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6698,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE- BA',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3535
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5455,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON GREECE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 3233.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 58330.68
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6270,
		'Federal School Code': 25994,
		'TAP College Name': 'NY COLL HEALTH PROF',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 883.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5605,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 23407.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 53278
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5590,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 22568
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 6.25,
		'Scholarship Dollars': 148195.56
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 28.75,
		'Scholarship Dollars': 96119.22
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 32268.36
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.13,
		'Scholarship Dollars': 86497.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5795,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 50757.32
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5820,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIVERSITY UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 21000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 20049.4
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 55599
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5685,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 72,
		'Scholarship FTE': 65.83,
		'Scholarship Dollars': 186941.03
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 36113.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 43928.83
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA DAY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 16,
		'Scholarship Dollars': 35776
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 129317.41
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5120,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 12000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 35860.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 11.5,
		'Scholarship Dollars': 22119.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5470,
		'Federal School Code': 2886,
		'TAP College Name': 'ALBANY LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 16609
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5425,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5410,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 5006.25
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 3.63,
		'Scholarship Dollars': 97922.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 8502,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3540
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 215,
		'Scholarship FTE': 199.5,
		'Scholarship Dollars': 581872.3
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 8545,
		'Federal School Code': 42062,
		'TAP College Name': 'THE DIGITAL FILM ACADEMCY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3522.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 8532,
		'Federal School Code': 25754,
		'TAP College Name': 'INTERNATIONAL CULINARY CENTER',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6957.5
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 127,
		'Scholarship FTE': 117,
		'Scholarship Dollars': 254951
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 56970.94
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 110,
		'Scholarship FTE': 108.5,
		'Scholarship Dollars': 223590
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 38960
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 21870
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 19140
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12,
		'Scholarship Dollars': 49195
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 94,
		'Scholarship FTE': 84,
		'Scholarship Dollars': 194641.75
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 25,
		'Federal School Code': 6435,
		'TAP College Name': 'ARNOT OGDEN MEDICAL CENTER',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 166.67
	},
	{
		'Academic Year': 2019,
		'TAP College Code': 5305,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 30000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 48,
		'Scholarship FTE': 37.21,
		'Scholarship Dollars': 85594.62
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1421,
		'Federal School Code': 42101,
		'TAP College Name': 'CUNY STELLA & CHARLES GUTTMAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 14568.9
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 64.17,
		'Scholarship Dollars': 221485.55
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5960,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE BLAUVELT-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 5.38,
		'Scholarship Dollars': 161962.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 918,
		'Scholarship FTE': 850.5,
		'Scholarship Dollars': 1773176.34
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.63,
		'Scholarship Dollars': 14779.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 57177.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5820,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIVERSITY UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 65,
		'Scholarship Dollars': 49258.9
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5805,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 44337.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 130,
		'Scholarship FTE': 122.42,
		'Scholarship Dollars': 120544.73
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 745,
		'Federal School Code': 6443,
		'TAP College Name': "ST JOHN'S RIVERSIDE HOSPITAL",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.92,
		'Scholarship Dollars': 6297.72
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 142,
		'Scholarship FTE': 121.54,
		'Scholarship Dollars': 419070.92
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 35715
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 64185
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 260,
		'Scholarship FTE': 216.17,
		'Scholarship Dollars': 358390.84
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.75,
		'Scholarship Dollars': 49502.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 18897
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 95,
		'Scholarship FTE': 88.5,
		'Scholarship Dollars': 137020
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 25.67,
		'Scholarship Dollars': 55202.12
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 26515
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5685,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 179,
		'Scholarship FTE': 156.13,
		'Scholarship Dollars': 313467.49
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.13,
		'Scholarship Dollars': 128806.96
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5672,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3435
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 469,
		'Scholarship FTE': 453,
		'Scholarship Dollars': 556478.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 11552
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 28,
		'Scholarship Dollars': 87613.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 577,
		'Scholarship FTE': 517.25,
		'Scholarship Dollars': 555701.17
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5645,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY  BARUCH COLL GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5635,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 170,
		'Scholarship FTE': 144.25,
		'Scholarship Dollars': 155362.46
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 22841
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 87618.4
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 450
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 544,
		'Scholarship FTE': 483.13,
		'Scholarship Dollars': 654588.27
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 34655.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5795
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 269,
		'Scholarship FTE': 224.63,
		'Scholarship Dollars': 299768.3
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5605,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 7549.94
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5590,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 36191.8
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 30,
		'Scholarship Dollars': 33765
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 62,
		'Scholarship Dollars': 87009
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 332,
		'Scholarship FTE': 286.42,
		'Scholarship Dollars': 377671.9
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 20000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5535,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER MED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 18.25,
		'Scholarship Dollars': 51685.6
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5515,
		'Federal School Code': 2783,
		'TAP College Name': 'NEW YORK LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5470,
		'Federal School Code': 2886,
		'TAP College Name': 'ALBANY LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 119,
		'Scholarship FTE': 112.5,
		'Scholarship Dollars': 188768.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 101,
		'Scholarship FTE': 80,
		'Scholarship Dollars': 93677.62
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5455,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12,
		'Scholarship Dollars': 113431
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 73,
		'Scholarship FTE': 58.21,
		'Scholarship Dollars': 91004.1
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 21.13,
		'Scholarship Dollars': 288039.32
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5420,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 33270
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 114,
		'Scholarship FTE': 113.5,
		'Scholarship Dollars': 226987.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 403,
		'Scholarship FTE': 386.5,
		'Scholarship Dollars': 715472.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 30340
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 31.96,
		'Scholarship Dollars': 40149.82
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 1200
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 100155
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 28.38,
		'Scholarship Dollars': 60113.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5410,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 10.75,
		'Scholarship Dollars': 46555
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 55.5,
		'Scholarship Dollars': 66285
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 10.75,
		'Scholarship Dollars': 9233.08
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 51420.06
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5395,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 51379.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 34.75,
		'Scholarship Dollars': 48440.1
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 28118
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5345,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 19305
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 147,
		'Scholarship FTE': 142.5,
		'Scholarship Dollars': 327254
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 638,
		'Scholarship FTE': 551.83,
		'Scholarship Dollars': 550955.46
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 25601
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5330,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6870
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 14050
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 40.5,
		'Scholarship Dollars': 41874.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 39827.84
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5305,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.13,
		'Scholarship Dollars': 27229.26
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 641,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 166.67
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 44,
		'Scholarship Dollars': 64418
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5300,
		'Federal School Code': 2749,
		'TAP College Name': 'N Y COL OF PODIATRIC MEDICINE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 34576
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 3500
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.13,
		'Scholarship Dollars': 92703.23
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5265,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 185,
		'Scholarship FTE': 176.96,
		'Scholarship Dollars': 252102.58
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 52.5,
		'Scholarship Dollars': 412550
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 59,
		'Scholarship FTE': 58.25,
		'Scholarship Dollars': 97752
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 47.75,
		'Scholarship Dollars': 280135.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5235,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 18000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5215,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 90,
		'Scholarship FTE': 85,
		'Scholarship Dollars': 72240
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5210,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5205,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 20280
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 353,
		'Scholarship FTE': 340,
		'Scholarship Dollars': 487945.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 208,
		'Scholarship FTE': 187.38,
		'Scholarship Dollars': 422036.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5200,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5155,
		'Federal School Code': 9895,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 3500
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5151,
		'Federal School Code': 9895,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.88,
		'Scholarship Dollars': 101577.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 63,
		'Scholarship Dollars': 89862
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 14,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 385,
		'Scholarship FTE': 376.25,
		'Scholarship Dollars': 406465
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 11.63,
		'Scholarship Dollars': 241351.95
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5120,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1365,
		'Scholarship FTE': 1241.71,
		'Scholarship Dollars': 4013797.89
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9870
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5110,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY - GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 32,
		'Scholarship Dollars': 96000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 79,
		'Scholarship Dollars': 364658.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 6.67,
		'Scholarship Dollars': 13511.98
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5100,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5065,
		'Federal School Code': 7109,
		'TAP College Name': 'SUC OLD WESTBURY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 11340
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 74.5,
		'Scholarship Dollars': 72485
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5045,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 23,
		'Scholarship Dollars': 19950
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 324,
		'Scholarship FTE': 301.5,
		'Scholarship Dollars': 315651
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 31620
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 122,
		'Scholarship FTE': 114.5,
		'Scholarship Dollars': 324735.06
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 109,
		'Scholarship FTE': 101.5,
		'Scholarship Dollars': 441575.49
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 64.29,
		'Scholarship Dollars': 83041.24
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 32710
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5030,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 368,
		'Scholarship FTE': 361.17,
		'Scholarship Dollars': 999491.23
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5024,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE DELHI NURSING PROG',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.88,
		'Scholarship Dollars': 24009.24
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 37630
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 580,
		'Federal School Code': 42514,
		'TAP College Name': 'ELIM BIBLE INSTITUTE AND COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 13847
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 35.75,
		'Scholarship Dollars': 131104
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.88,
		'Scholarship Dollars': 40775.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 163,
		'Scholarship FTE': 153.5,
		'Scholarship Dollars': 570861.83
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 55.83,
		'Scholarship Dollars': 364133.03
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 1750
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 14,
		'Scholarship Dollars': 38301.8
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 52.5,
		'Scholarship Dollars': 109500
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 56955.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 39,
		'Scholarship Dollars': 127809.35
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 73524.69
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 16,
		'Scholarship Dollars': 41473.23
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 30,
		'Scholarship Dollars': 123105
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 16.5,
		'Scholarship Dollars': 37600.88
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 188,
		'Scholarship FTE': 173.25,
		'Scholarship Dollars': 346694.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 39.5,
		'Scholarship Dollars': 457533.02
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 48148.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2330,
		'Federal School Code': 42622,
		'TAP College Name': 'ELYON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 125
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 179,
		'Scholarship FTE': 169,
		'Scholarship Dollars': 561804.76
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2321,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INST QRTLY PROGRAMS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.33,
		'Scholarship Dollars': 16030
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3435
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 73,
		'Scholarship FTE': 69.5,
		'Scholarship Dollars': 67957.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 287,
		'Federal School Code': 10153,
		'TAP College Name': 'HELENE FULD SCHOOL REG NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 397,
		'Scholarship FTE': 377.75,
		'Scholarship Dollars': 829521.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 122,
		'Scholarship FTE': 113.5,
		'Scholarship Dollars': 306523.77
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2270,
		'Federal School Code': 25994,
		'TAP College Name': 'NEW YORK COLL OF HEALTH PROFESSIO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 11055
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 135,
		'Scholarship FTE': 123.67,
		'Scholarship Dollars': 500794.03
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 17132.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 18008.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 20.17,
		'Scholarship Dollars': 63409.23
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 212,
		'Scholarship FTE': 197.38,
		'Scholarship Dollars': 539535.08
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 22.5,
		'Scholarship Dollars': 46585.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 161,
		'Scholarship FTE': 146.25,
		'Scholarship Dollars': 807692.83
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 35.13,
		'Scholarship Dollars': 59079.4
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 13.5,
		'Scholarship Dollars': 42017.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 35.5,
		'Scholarship Dollars': 43955
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 231,
		'Scholarship FTE': 217.38,
		'Scholarship Dollars': 270906.7
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 215,
		'Scholarship FTE': 197,
		'Scholarship Dollars': 689717.05
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 18.29,
		'Scholarship Dollars': 32627.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 13.17,
		'Scholarship Dollars': 26213
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 478,
		'Scholarship FTE': 454.25,
		'Scholarship Dollars': 1254632.57
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 16337
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 35.13,
		'Scholarship Dollars': 69949.48
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 14.5,
		'Scholarship Dollars': 16385
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 916,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.42,
		'Scholarship Dollars': 27300
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.67,
		'Scholarship Dollars': 34019
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 3047
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 179,
		'Scholarship FTE': 168,
		'Scholarship Dollars': 439109.64
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 67,
		'Scholarship FTE': 58.04,
		'Scholarship Dollars': 137789.4
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 32.83,
		'Scholarship Dollars': 75785.05
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 149,
		'Scholarship FTE': 140.25,
		'Scholarship Dollars': 260416.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 326,
		'Scholarship FTE': 291,
		'Scholarship Dollars': 592630
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 106,
		'Scholarship FTE': 103.5,
		'Scholarship Dollars': 122155
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 78.5,
		'Scholarship Dollars': 392388.22
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 67,
		'Scholarship FTE': 41,
		'Scholarship Dollars': 261038.8
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 33.5,
		'Scholarship Dollars': 72624.99
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 28.38,
		'Scholarship Dollars': 53715.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 128,
		'Scholarship FTE': 119.25,
		'Scholarship Dollars': 707027.1
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 96,
		'Scholarship FTE': 77.71,
		'Scholarship Dollars': 207714.79
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 62188.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 455,
		'Federal School Code': 12203,
		'TAP College Name': 'ST PETERS HOSP COLLEGE OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1992.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 121,
		'Scholarship FTE': 105.33,
		'Scholarship Dollars': 249091.76
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 22.67,
		'Scholarship Dollars': 68635.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 2985.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 183,
		'Scholarship FTE': 167.83,
		'Scholarship Dollars': 367444.23
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 109,
		'Scholarship FTE': 84.71,
		'Scholarship Dollars': 416453.4
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9.54,
		'Scholarship Dollars': 75354.71
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 333,
		'Scholarship FTE': 327.79,
		'Scholarship Dollars': 678758
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 14,
		'Scholarship Dollars': 57500
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 403,
		'Scholarship FTE': 367.96,
		'Scholarship Dollars': 1521925.42
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 15.21,
		'Scholarship Dollars': 38779.77
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 11016.06
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 16.5,
		'Scholarship Dollars': 61624.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 77,
		'Scholarship FTE': 71.75,
		'Scholarship Dollars': 199596.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 109,
		'Scholarship FTE': 102.13,
		'Scholarship Dollars': 768207.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1487,
		'Scholarship FTE': 1433.83,
		'Scholarship Dollars': 5781372.34
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 53.42,
		'Scholarship Dollars': 198494.85
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8545,
		'Federal School Code': 42062,
		'TAP College Name': 'THE DIGITAL FILM ACADEMCY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 10205
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8535,
		'Federal School Code': 15204,
		'TAP College Name': 'WASH-SAR-WAR-HAM-ESS BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4696.4
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 61,
		'Scholarship Dollars': 430927.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8532,
		'Federal School Code': 25754,
		'TAP College Name': 'INTERNATIONAL CULINARY CENTER',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 23785
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8528,
		'Federal School Code': 35373,
		'TAP College Name': 'NEW YORK AUTOMOTIVE & DIESEL INST',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3335
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1091,
		'Scholarship FTE': 992,
		'Scholarship Dollars': 2733509.38
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 30,
		'Scholarship Dollars': 29931
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8518,
		'Federal School Code': 1255,
		'TAP College Name': 'LINCOLN TECHNICAL INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 8603.66
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8509,
		'Federal School Code': 12652,
		'TAP College Name': 'ONONDAGA CORTLAND MADISON BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3435
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 145,
		'Scholarship FTE': 130.75,
		'Scholarship Dollars': 387615.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8506,
		'Federal School Code': 30962,
		'TAP College Name': 'CHARLES STUART SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 19510.73
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8505,
		'Federal School Code': 10147,
		'TAP College Name': 'WESTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 13740
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 10620
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 98,
		'Scholarship FTE': 92.5,
		'Scholarship Dollars': 175642.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 49.5,
		'Scholarship Dollars': 128247.42
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 124,
		'Scholarship FTE': 108.83,
		'Scholarship Dollars': 136009.98
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 30.79,
		'Scholarship Dollars': 45532
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8502,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 16217.66
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 15994.06
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 62.13,
		'Scholarship Dollars': 128934.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 98040
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7738,
		'Federal School Code': 20937,
		'TAP College Name': 'LONG ISLAND BUSINESS INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 42,
		'Scholarship Dollars': 129500
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 25.63,
		'Scholarship Dollars': 37185.05
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 2767
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 29651.9
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 51.63,
		'Scholarship Dollars': 98731.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 22.75,
		'Scholarship Dollars': 49541.8
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 825.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 4000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 36,
		'Scholarship Dollars': 122639
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 6255.2
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7718,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 2821.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 68.5,
		'Scholarship Dollars': 127540
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7699,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE-2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 3551.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 216,
		'Scholarship FTE': 148.08,
		'Scholarship Dollars': 229635.46
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 7875
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 26,
		'Scholarship Dollars': 78340.6
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 4410
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.83,
		'Scholarship Dollars': 13059.66
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 35,
		'Scholarship Dollars': 121838.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.75,
		'Scholarship Dollars': 15464.25
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 7446.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 44.63,
		'Scholarship Dollars': 91474.32
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 407,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 48,
		'Scholarship FTE': 46,
		'Scholarship Dollars': 167530.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 3500
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON GREECE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 20045
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 35.54,
		'Scholarship Dollars': 80449.38
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 18.17,
		'Scholarship Dollars': 43880.99
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6698,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE- BA',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 417.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 118,
		'Scholarship FTE': 114.5,
		'Scholarship Dollars': 100450
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 19,
		'Scholarship Dollars': 32091.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.67,
		'Scholarship Dollars': 11014.98
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 7990.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 3450
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6270,
		'Federal School Code': 25994,
		'TAP College Name': 'NY COLL HEALTH PROF',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 10305
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 5482.65
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 144,
		'Scholarship FTE': 137.17,
		'Scholarship Dollars': 687311.23
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 5190.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 13.25,
		'Scholarship Dollars': 40241.1
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.75,
		'Scholarship Dollars': 5325
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA DAY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 17769.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 25,
		'Scholarship Dollars': 64580
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE 4 YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 225
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 2750
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 63,
		'Scholarship FTE': 60.13,
		'Scholarship Dollars': 168194.5
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 24.71,
		'Scholarship Dollars': 57387.7
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9.42,
		'Scholarship Dollars': 89946.98
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 96,
		'Scholarship FTE': 86.5,
		'Scholarship Dollars': 386382.65
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 18.83,
		'Scholarship Dollars': 47943
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11.25,
		'Scholarship Dollars': 58871.35
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 151,
		'Scholarship FTE': 120.75,
		'Scholarship Dollars': 187129.85
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 190,
		'Scholarship FTE': 182.5,
		'Scholarship Dollars': 514962.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 78,
		'Scholarship Dollars': 125585.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 45,
		'Federal School Code': 6438,
		'TAP College Name': 'PHILLIPS BETH ISRAEL SCH.NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 74,
		'Scholarship FTE': 70,
		'Scholarship Dollars': 164555.75
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 8070
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 334,
		'Scholarship FTE': 299.33,
		'Scholarship Dollars': 695029.05
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 73377
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 39,
		'Scholarship Dollars': 106305
	},
	{
		'Academic Year': 2018,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 38.13,
		'Scholarship Dollars': 89968.68
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 13065
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 37.96,
		'Scholarship Dollars': 98020.3
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3335
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 4250
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 3500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 24.83,
		'Scholarship Dollars': 59656.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7699,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE-2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 18.5,
		'Scholarship Dollars': 46075.16
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 73808.3
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 26155
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 5133.34
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 363,
		'Scholarship FTE': 322.42,
		'Scholarship Dollars': 772372.96
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 66.5,
		'Scholarship Dollars': 194336.9
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1535,
		'Federal School Code': 21579,
		'TAP College Name': 'ISABELLA GRAHAM HART SCH PRAC NUR',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 225
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 18466.68
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 17.33,
		'Scholarship Dollars': 34719.99
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1421,
		'Federal School Code': 42101,
		'TAP College Name': 'STELLA & CHARLES GUTTMAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 3750
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6698,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE- BA',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 2250
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 11295.1
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 38.13,
		'Scholarship Dollars': 101693.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 10402.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6270,
		'Federal School Code': 25994,
		'TAP College Name': 'NY COLL HEALTH PROF',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.38,
		'Scholarship Dollars': 9171.58
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 72,
		'Scholarship FTE': 60.25,
		'Scholarship Dollars': 52781.9
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 5700
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6121,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA EVE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 534
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 7920
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 140,
		'Scholarship FTE': 135.5,
		'Scholarship Dollars': 141537.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 995,
		'Scholarship FTE': 943,
		'Scholarship Dollars': 1636895.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 130,
		'Scholarship FTE': 107,
		'Scholarship Dollars': 377448.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE 4 YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 7235
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 305,
		'Scholarship FTE': 258.17,
		'Scholarship Dollars': 375979.39
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 12.75,
		'Scholarship Dollars': 111885.05
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 90,
		'Scholarship FTE': 73.33,
		'Scholarship Dollars': 336255.45
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 90,
		'Scholarship FTE': 85.75,
		'Scholarship Dollars': 106007.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 21.25,
		'Scholarship Dollars': 61062.3
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9.92,
		'Scholarship Dollars': 60606.54
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 28.21,
		'Scholarship Dollars': 57746.89
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 162,
		'Scholarship FTE': 140.17,
		'Scholarship Dollars': 235813.33
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 28.5,
		'Scholarship Dollars': 98327.72
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 35.83,
		'Scholarship Dollars': 89136.94
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 4115.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 28.75,
		'Scholarship Dollars': 143819.25
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 564,
		'Scholarship FTE': 506.63,
		'Scholarship Dollars': 491550
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 82,
		'Scholarship FTE': 77.75,
		'Scholarship Dollars': 243352.6
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5960,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE BLAUVELT-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 141389.32
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 169,
		'Scholarship FTE': 145.71,
		'Scholarship Dollars': 155757.53
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 19776.03
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 65870
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.42,
		'Scholarship Dollars': 3279.39
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 590,
		'Scholarship FTE': 533.63,
		'Scholarship Dollars': 714893.82
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 27022.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 13735
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 267,
		'Scholarship FTE': 228.88,
		'Scholarship Dollars': 256641.76
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5755,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6670
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 25972.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 26,
		'Scholarship Dollars': 91249
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 526,
		'Scholarship FTE': 497.5,
		'Scholarship Dollars': 555345.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 39,
		'Scholarship FTE': 38.5,
		'Scholarship Dollars': 45235
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 59.5,
		'Scholarship Dollars': 47070
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 367,
		'Scholarship FTE': 318.63,
		'Scholarship Dollars': 323752.08
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 37917.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 35525
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 23.67,
		'Scholarship Dollars': 59247.1
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 10241.48
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.38,
		'Scholarship Dollars': 95254.45
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 130,
		'Scholarship FTE': 127,
		'Scholarship Dollars': 189512.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 120,
		'Scholarship FTE': 100.79,
		'Scholarship Dollars': 152613.15
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5672,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 17625
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5640,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6470.01
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 72,
		'Scholarship FTE': 53.13,
		'Scholarship Dollars': 67270.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5635,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5858
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 16338.6
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 17400
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 30.5,
		'Scholarship Dollars': 46934.8
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 49005.62
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 41096
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 39195.8
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5605,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 8164.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5585,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 39863
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 105,
		'Scholarship FTE': 93.04,
		'Scholarship Dollars': 95748.05
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 15,
		'Scholarship Dollars': 16800
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5565,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 11905
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5455,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3235
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 35133
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11.5,
		'Scholarship Dollars': 129935
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9.63,
		'Scholarship Dollars': 179852.34
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 442,
		'Scholarship FTE': 424,
		'Scholarship Dollars': 791976.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 159,
		'Scholarship FTE': 154.25,
		'Scholarship Dollars': 322870
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 652,
		'Scholarship FTE': 555,
		'Scholarship Dollars': 483730.25
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 16.5,
		'Scholarship Dollars': 30216.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5420,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 55401.8
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.63,
		'Scholarship Dollars': 107623.9
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 49.5,
		'Scholarship Dollars': 54044.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.88,
		'Scholarship Dollars': 59172.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 66914
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 641,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500.01
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1075,
		'Federal School Code': 7465,
		'TAP College Name': 'AMERICAN ACAD OF DRAMATIC ARTS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 3835.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5395,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 49720
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 51636
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 51.5,
		'Scholarship Dollars': 62950.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 73975.68
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 49392.22
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 51.5,
		'Scholarship Dollars': 300435
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 59,
		'Scholarship FTE': 56.5,
		'Scholarship Dollars': 69570
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5305,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 27872.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.13,
		'Scholarship Dollars': 46130.58
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 54.25,
		'Scholarship Dollars': 243848.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 43172
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5265,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5953
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 342,
		'Scholarship FTE': 324.75,
		'Scholarship Dollars': 370981.8
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 94,
		'Scholarship FTE': 86.5,
		'Scholarship Dollars': 81390
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5205,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 9990
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.25,
		'Scholarship Dollars': 107547.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 176,
		'Scholarship FTE': 161.67,
		'Scholarship Dollars': 352063.62
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 8.38,
		'Scholarship Dollars': 201872.94
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5120,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6470
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 21700
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 113,
		'Scholarship FTE': 111,
		'Scholarship Dollars': 107560
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 198,
		'Scholarship FTE': 184.75,
		'Scholarship Dollars': 263783.83
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 83,
		'Scholarship FTE': 78,
		'Scholarship Dollars': 76891.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 41580
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 5500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5110,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY - GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 26470
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5065,
		'Federal School Code': 7109,
		'TAP College Name': 'SUC OLD WESTBURY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6470
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 383,
		'Scholarship FTE': 374,
		'Scholarship Dollars': 338178
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 58520
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5024,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE DELHI NURSING PROG',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 41071
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 73.5,
		'Scholarship Dollars': 327720.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1452,
		'Scholarship FTE': 1332.04,
		'Scholarship Dollars': 3700016.43
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6470
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 28040.36
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 11.83,
		'Scholarship Dollars': 51165.33
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.88,
		'Scholarship Dollars': 46702.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 168,
		'Scholarship FTE': 157.5,
		'Scholarship Dollars': 569409.58
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 147,
		'Scholarship FTE': 135,
		'Scholarship Dollars': 506972.07
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 131,
		'Scholarship FTE': 115.5,
		'Scholarship Dollars': 447015.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 82,
		'Scholarship FTE': 80.5,
		'Scholarship Dollars': 76810
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 2750
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 55777
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 70,
		'Scholarship Dollars': 49057.23
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 52257
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 17,
		'Scholarship Dollars': 97228.32
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 64755.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 390,
		'Scholarship FTE': 379.04,
		'Scholarship Dollars': 957230.14
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7.13,
		'Scholarship Dollars': 54203.87
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 20.42,
		'Scholarship Dollars': 46734.36
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 33.5,
		'Scholarship Dollars': 96164
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 20.5,
		'Scholarship Dollars': 73486
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2330,
		'Federal School Code': 42622,
		'TAP College Name': 'ELYON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 33.5,
		'Scholarship Dollars': 29750
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 56,
		'Scholarship Dollars': 108210
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 183,
		'Scholarship FTE': 174.17,
		'Scholarship Dollars': 278679
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 63,
		'Scholarship FTE': 62,
		'Scholarship Dollars': 365599.04
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2321,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INST QRTLY PROGRAMS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.17,
		'Scholarship Dollars': 7781.66
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 21004
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 37,
		'Scholarship Dollars': 116450.03
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.38,
		'Scholarship Dollars': 1698.3
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 15282
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 431,
		'Scholarship FTE': 409.17,
		'Scholarship Dollars': 775313.89
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 30,
		'Scholarship Dollars': 124339
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.75,
		'Scholarship Dollars': 24509.01
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 44.5,
		'Scholarship Dollars': 433762.2
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 87417
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 14454
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 287,
		'Federal School Code': 10153,
		'TAP College Name': 'HELENE FULD SCHOOL REG NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.33,
		'Scholarship Dollars': 6342.3
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 550,
		'Federal School Code': 20690,
		'TAP College Name': 'NEW YORK SCHOOL INTERIOR DESIGN',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 3781.25
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 202,
		'Scholarship FTE': 193,
		'Scholarship Dollars': 671405.73
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 40.63,
		'Scholarship Dollars': 80091.3
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 36469
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 139,
		'Scholarship FTE': 133.29,
		'Scholarship Dollars': 314538.63
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 27.96,
		'Scholarship Dollars': 64421
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 9.92,
		'Scholarship Dollars': 17960
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 21.75,
		'Scholarship Dollars': 54151.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 119,
		'Scholarship FTE': 111.13,
		'Scholarship Dollars': 400070.16
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 4750
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 33,
		'Scholarship Dollars': 65687.18
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 236,
		'Scholarship FTE': 219.13,
		'Scholarship Dollars': 606266.69
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 7.96,
		'Scholarship Dollars': 13904
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 337,
		'Scholarship FTE': 320.5,
		'Scholarship Dollars': 264493
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 73,
		'Scholarship FTE': 65.5,
		'Scholarship Dollars': 73736
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 47.5,
		'Scholarship Dollars': 31950
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 245,
		'Scholarship FTE': 234.92,
		'Scholarship Dollars': 271228.63
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 174,
		'Scholarship FTE': 165.25,
		'Scholarship Dollars': 806292.96
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 62,
		'Scholarship FTE': 51.21,
		'Scholarship Dollars': 143272.45
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 34,
		'Scholarship Dollars': 61129.6
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 248,
		'Scholarship FTE': 220.79,
		'Scholarship Dollars': 798406.3
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 20100
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 36.38,
		'Scholarship Dollars': 67127.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 17,
		'Scholarship Dollars': 14060
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 568,
		'Scholarship FTE': 548,
		'Scholarship Dollars': 1432008.41
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 81,
		'Scholarship FTE': 56.21,
		'Scholarship Dollars': 138542
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 56975
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 174,
		'Scholarship FTE': 164,
		'Scholarship Dollars': 386215.89
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 23.29,
		'Scholarship Dollars': 75090.25
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 100,
		'Scholarship FTE': 99.5,
		'Scholarship Dollars': 127050
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 85,
		'Scholarship FTE': 76.25,
		'Scholarship Dollars': 474122.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 98,
		'Scholarship FTE': 61,
		'Scholarship Dollars': 401030.96
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 116,
		'Scholarship FTE': 87.21,
		'Scholarship Dollars': 366849.64
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 98781.4
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 133,
		'Scholarship FTE': 123.75,
		'Scholarship Dollars': 863215.98
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 18.96,
		'Scholarship Dollars': 68390.52
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 20.92,
		'Scholarship Dollars': 56268.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 14,
		'Scholarship Dollars': 56640
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 138,
		'Scholarship FTE': 119,
		'Scholarship Dollars': 294391.87
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 82,
		'Scholarship FTE': 79.25,
		'Scholarship Dollars': 151090.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 48.33,
		'Scholarship Dollars': 228224.33
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 206,
		'Scholarship FTE': 188.42,
		'Scholarship Dollars': 387023.53
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 65.5,
		'Scholarship Dollars': 394467.55
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 33,
		'Scholarship Dollars': 46421.96
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 366,
		'Scholarship FTE': 327,
		'Scholarship Dollars': 557610.37
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 387,
		'Scholarship FTE': 378,
		'Scholarship Dollars': 713749.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 121,
		'Scholarship FTE': 114,
		'Scholarship Dollars': 714816.49
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 412,
		'Scholarship FTE': 378.71,
		'Scholarship Dollars': 1218657.01
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 155,
		'Scholarship FTE': 135,
		'Scholarship Dollars': 370625.3
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 20098.36
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 31.33,
		'Scholarship Dollars': 37310
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 58.13,
		'Scholarship Dollars': 115034
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 437,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6670
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1568,
		'Scholarship FTE': 1517.21,
		'Scholarship Dollars': 5380224.59
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 26.21,
		'Scholarship Dollars': 62264.6
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 23600
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1170,
		'Scholarship FTE': 1066.38,
		'Scholarship Dollars': 2616826.93
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 67,
		'Scholarship FTE': 58.5,
		'Scholarship Dollars': 157236
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 75,
		'Scholarship FTE': 57.58,
		'Scholarship Dollars': 86101.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 153,
		'Scholarship FTE': 143.25,
		'Scholarship Dollars': 248888.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 20.5,
		'Scholarship Dollars': 69540
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 121,
		'Scholarship FTE': 112.54,
		'Scholarship Dollars': 144687.62
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 32.88,
		'Scholarship Dollars': 52797
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8564,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1667.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2051,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8560,
		'Federal School Code': 10051,
		'TAP College Name': 'LAQUARDIA COMMUNITY COLLEGE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2305
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8545,
		'Federal School Code': 42062,
		'TAP College Name': 'THE DIGITAL FILM ACADEMCY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 20010
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 53,
		'Scholarship Dollars': 161350
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 30.79,
		'Scholarship Dollars': 114724.55
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8542,
		'Federal School Code': 0,
		'TAP College Name': 'COMPU21 CORP',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1667.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8528,
		'Federal School Code': 35373,
		'TAP College Name': 'NEW YORK AUTOMOTIVE & DIESEL INST',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 6765
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 3250
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8518,
		'Federal School Code': 1255,
		'TAP College Name': 'LINCOLN TECHNICAL INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 13359.05
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8509,
		'Federal School Code': 12652,
		'TAP College Name': 'ONONDAGA CORTLAND MADISON BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3335
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 4750
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 52.83,
		'Scholarship Dollars': 104459.49
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8506,
		'Federal School Code': 30962,
		'TAP College Name': 'CHARLES STUART SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 19081.25
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8505,
		'Federal School Code': 10147,
		'TAP College Name': 'WESTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2812.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 12,
		'Scholarship Dollars': 13770.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8502,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2578.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 14076
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 63,
		'Scholarship FTE': 58,
		'Scholarship Dollars': 163814.25
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 6500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7952,
		'Federal School Code': 10813,
		'TAP College Name': 'AMERICAN ACADEMY MCALLISTER INST.',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.04,
		'Scholarship Dollars': 6948.14
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 101920
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 14351
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.46,
		'Scholarship Dollars': 3057.19
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 148,
		'Scholarship FTE': 137.5,
		'Scholarship Dollars': 311298.66
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 62.5,
		'Scholarship Dollars': 109051.5
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 117,
		'Scholarship FTE': 111.75,
		'Scholarship Dollars': 147716
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 16090
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 50.5,
		'Scholarship Dollars': 66373.99
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 121,
		'Scholarship FTE': 120,
		'Scholarship Dollars': 583034.75
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 113,
		'Scholarship FTE': 109,
		'Scholarship Dollars': 102800
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 29,
		'Scholarship Dollars': 69190
	},
	{
		'Academic Year': 2017,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 18592.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.88,
		'Scholarship Dollars': 73214.54
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 31050
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 19464.48
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5672,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 20260
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8563,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1623.75
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 28558.95
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 93449.4
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 10870
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5605,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 15865
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5600,
		'Federal School Code': 38813,
		'TAP College Name': 'GRADUATE COLLEGE UNION UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6470.01
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5585,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 38048
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5565,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 5435
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 10000
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 13.5,
		'Scholarship Dollars': 180260.65
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5420,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 32610
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 52282.08
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 67665
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 82502.6
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5395,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 16505
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 6.63,
		'Scholarship Dollars': 188198.46
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 49260
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5305,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 15972.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8559,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1623.75
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 35397.48
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.75,
		'Scholarship Dollars': 96978.43
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5235,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6470
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5205,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6417.3
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 6.38,
		'Scholarship Dollars': 195435
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5120,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3235
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5110,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY - GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 58520
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5065,
		'Federal School Code': 7109,
		'TAP College Name': 'SUC OLD WESTBURY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 5435
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 20000
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 60450
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 34182.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 49757.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 136,
		'Scholarship FTE': 132,
		'Scholarship Dollars': 445144.75
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 19.38,
		'Scholarship Dollars': 113179.13
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 6.17,
		'Scholarship Dollars': 62796.22
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 14.5,
		'Scholarship Dollars': 93075.38
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 51952.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 28,
		'Scholarship Dollars': 152378
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2321,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INST QRTLY PROGRAMS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6995.01
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 39472.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 17020
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 20721.75
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.25,
		'Scholarship Dollars': 31701.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 18,
		'Scholarship Dollars': 32126.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 27762.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 28.42,
		'Scholarship Dollars': 55140
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4.79,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 4725
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 25,
		'Scholarship Dollars': 70778.48
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 19201.1
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 48.96,
		'Scholarship Dollars': 106324.2
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 21.71,
		'Scholarship Dollars': 38129
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 10730.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 95,
		'Scholarship FTE': 68.63,
		'Scholarship Dollars': 130231.35
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 33910
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 20992.75
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 63383
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 12.46,
		'Scholarship Dollars': 45956.71
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 3747.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 24.79,
		'Scholarship Dollars': 78191.04
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 91,
		'Scholarship FTE': 84.25,
		'Scholarship Dollars': 185148.75
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 39.79,
		'Scholarship Dollars': 262091.2
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 51,
		'Scholarship Dollars': 353262
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 50.75,
		'Scholarship Dollars': 241890.24
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 33.88,
		'Scholarship Dollars': 31889.74
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 36.04,
		'Scholarship Dollars': 63989.8
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 30750
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 40,
		'Scholarship Dollars': 89389
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 21.29,
		'Scholarship Dollars': 74024.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 74200
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.25,
		'Scholarship Dollars': 14093.75
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 39,
		'Scholarship FTE': 33.67,
		'Scholarship Dollars': 61088.9
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 3750
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 5656
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 8200
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 23,
		'Scholarship Dollars': 96945.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 20.92,
		'Scholarship Dollars': 55191.7
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 66899
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1620,
		'Federal School Code': 6435,
		'TAP College Name': 'ARNOT OGDEN MEDICAL CENTER',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4058
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1535,
		'Federal School Code': 21579,
		'TAP College Name': 'ISABELLA GRAHAM HART SCH PRAC NUR',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 225
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1421,
		'Federal School Code': 42101,
		'TAP College Name': 'STELLA & CHARLES GUTTMAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 3500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 83,
		'Scholarship FTE': 71.08,
		'Scholarship Dollars': 80098.67
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 144,
		'Scholarship FTE': 126.08,
		'Scholarship Dollars': 436934.06
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 276,
		'Scholarship FTE': 247.17,
		'Scholarship Dollars': 321458.91
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 28.42,
		'Scholarship Dollars': 83729.05
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 159,
		'Scholarship FTE': 138,
		'Scholarship Dollars': 250432.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 550,
		'Scholarship FTE': 492.25,
		'Scholarship Dollars': 451679.88
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 170,
		'Scholarship FTE': 141.25,
		'Scholarship Dollars': 187517.51
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 276,
		'Scholarship FTE': 230.08,
		'Scholarship Dollars': 303117.71
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 349,
		'Scholarship FTE': 299.04,
		'Scholarship Dollars': 314218.31
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 26,
		'Scholarship Dollars': 67091.55
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 47.21,
		'Scholarship Dollars': 67907.95
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 25.21,
		'Scholarship Dollars': 50433.85
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 53452.25
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 43347.8
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8556,
		'Federal School Code': 41802,
		'TAP College Name': 'LONG ISLAND NAIL & SKIN CARE INST',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 17559.6
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 38.5,
		'Scholarship Dollars': 37250
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 32.83,
		'Scholarship Dollars': 27823.33
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 3500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 51.25,
		'Scholarship Dollars': 178686
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 95,
		'Scholarship FTE': 92.5,
		'Scholarship Dollars': 83395
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 15.5,
		'Scholarship Dollars': 12700
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 60,
		'Scholarship Dollars': 84840.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 5500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 403,
		'Scholarship FTE': 396.5,
		'Scholarship Dollars': 367159.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1413,
		'Scholarship FTE': 1288.67,
		'Scholarship Dollars': 2922658.9
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 127,
		'Scholarship FTE': 101.17,
		'Scholarship Dollars': 164468.09
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 11.42,
		'Scholarship Dollars': 29247.26
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 105,
		'Scholarship FTE': 103.5,
		'Scholarship Dollars': 94335
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 82,
		'Scholarship FTE': 79.67,
		'Scholarship Dollars': 61830.61
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 431,
		'Scholarship FTE': 417.25,
		'Scholarship Dollars': 920444
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 592,
		'Scholarship FTE': 536.21,
		'Scholarship Dollars': 718460.49
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 44212
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 57.5,
		'Scholarship Dollars': 240986.16
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 47,
		'Scholarship FTE': 42.5,
		'Scholarship Dollars': 137237.21
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 71180
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 52.5,
		'Scholarship Dollars': 498271.18
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 182,
		'Scholarship FTE': 175.5,
		'Scholarship Dollars': 528003.46
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 148,
		'Scholarship FTE': 140.58,
		'Scholarship Dollars': 315335.68
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 115,
		'Scholarship FTE': 108.5,
		'Scholarship Dollars': 302881.77
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.88,
		'Scholarship Dollars': 7511.88
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 1674,
		'Federal School Code': 11617,
		'TAP College Name': 'NEW YORK  METHODIST HOSPITAL',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 15575
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 249,
		'Scholarship FTE': 238.21,
		'Scholarship Dollars': 660933.03
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 185,
		'Scholarship FTE': 168.67,
		'Scholarship Dollars': 789123.59
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 245,
		'Scholarship FTE': 229.67,
		'Scholarship Dollars': 658432.47
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 627,
		'Scholarship FTE': 600.5,
		'Scholarship Dollars': 1314688.39
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 34.5,
		'Scholarship Dollars': 50525
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 162,
		'Scholarship FTE': 156.5,
		'Scholarship Dollars': 243803.09
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 121,
		'Scholarship FTE': 81.29,
		'Scholarship Dollars': 499870.41
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 128,
		'Scholarship FTE': 121,
		'Scholarship Dollars': 704058.15
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 139,
		'Scholarship FTE': 122.67,
		'Scholarship Dollars': 276922.87
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 187,
		'Scholarship FTE': 171.79,
		'Scholarship Dollars': 376748.05
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 396,
		'Scholarship FTE': 367.54,
		'Scholarship Dollars': 1041194.45
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.13,
		'Scholarship Dollars': 15632.18
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1455,
		'Scholarship FTE': 1413.5,
		'Scholarship Dollars': 4189857.72
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 51.42,
		'Scholarship Dollars': 112151.05
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1112,
		'Scholarship FTE': 1025,
		'Scholarship Dollars': 2239546.14
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 92,
		'Scholarship FTE': 83.25,
		'Scholarship Dollars': 89745.27
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 65.5,
		'Scholarship Dollars': 163975
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 8597.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 35375.2
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 838,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING MED/DENTAL",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 4385.33
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 7392.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 20.5,
		'Scholarship Dollars': 107321.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 108,
		'Scholarship FTE': 106,
		'Scholarship Dollars': 102525
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.21,
		'Scholarship Dollars': 3803.23
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 762,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE - WEEKEND',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 2165
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 86,
		'Scholarship FTE': 75.63,
		'Scholarship Dollars': 182513.06
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 42.67,
		'Scholarship Dollars': 125046.37
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 111,
		'Scholarship FTE': 87.08,
		'Scholarship Dollars': 394849.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 403,
		'Scholarship FTE': 396.25,
		'Scholarship Dollars': 785467.25
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 115,
		'Scholarship FTE': 110,
		'Scholarship Dollars': 120511.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 34.5,
		'Scholarship Dollars': 168686.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 1.96,
		'Scholarship Dollars': 9735.63
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 52.92,
		'Scholarship Dollars': 100532
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 63.5,
		'Scholarship Dollars': 53670
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 154,
		'Scholarship FTE': 150.5,
		'Scholarship Dollars': 206649
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 30.5,
		'Scholarship Dollars': 19724.2
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 100,
		'Scholarship FTE': 92.38,
		'Scholarship Dollars': 85880.63
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 16066
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 644,
		'Scholarship FTE': 565,
		'Scholarship Dollars': 488286.51
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 641,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 166.67
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 62,
		'Scholarship FTE': 61,
		'Scholarship Dollars': 71001.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 347,
		'Scholarship FTE': 326,
		'Scholarship Dollars': 330102.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 14176
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 41610
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 605,
		'Federal School Code': 30277,
		'TAP College Name': 'PACIFIC COLLEGE OF ORIENTAL MED',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 166.67
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 52,
		'Scholarship Dollars': 224517
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 90,
		'Scholarship FTE': 85.54,
		'Scholarship Dollars': 306264.34
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 15034
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 32372
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 94,
		'Scholarship FTE': 92,
		'Scholarship Dollars': 113905
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 464,
		'Scholarship FTE': 443.96,
		'Scholarship Dollars': 641927.49
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 28.5,
		'Scholarship Dollars': 68951
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 252,
		'Scholarship FTE': 244.04,
		'Scholarship Dollars': 261930.51
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 26.04,
		'Scholarship Dollars': 46363.3
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 77,
		'Scholarship FTE': 71.92,
		'Scholarship Dollars': 418866.47
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 53900
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 23.5,
		'Scholarship Dollars': 50241.16
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 127,
		'Scholarship FTE': 119,
		'Scholarship Dollars': 768155
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 438,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING MED ASSIST",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5024,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE DELHI NURSING PROG',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 59754
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 437,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 12990
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 22.5,
		'Scholarship Dollars': 74185
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 225
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 125,
		'Scholarship FTE': 120.21,
		'Scholarship Dollars': 478763.23
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 112,
		'Scholarship FTE': 104.58,
		'Scholarship Dollars': 408837.18
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 162,
		'Scholarship FTE': 157.5,
		'Scholarship Dollars': 156546.99
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 95525
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 25.21,
		'Scholarship Dollars': 26606.76
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 175,
		'Scholarship FTE': 169,
		'Scholarship Dollars': 245744
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 58,
		'Scholarship Dollars': 344783
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 69.5,
		'Scholarship Dollars': 67269.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 157,
		'Scholarship FTE': 147.71,
		'Scholarship Dollars': 506719.02
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 62,
		'Scholarship FTE': 56.5,
		'Scholarship Dollars': 104770.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 109156
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 64,
		'Scholarship FTE': 62.5,
		'Scholarship Dollars': 65110
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 98,
		'Scholarship FTE': 96,
		'Scholarship Dollars': 89125
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5410,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 12445
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 399,
		'Scholarship FTE': 393.04,
		'Scholarship Dollars': 677043.84
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 79,
		'Scholarship FTE': 76.5,
		'Scholarship Dollars': 108900
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 168013.8
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 210,
		'Federal School Code': 6448,
		'TAP College Name': 'THE BELANGER SCHOOL OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 63,
		'Scholarship FTE': 61.25,
		'Scholarship Dollars': 84254.4
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 505,
		'Scholarship FTE': 491.5,
		'Scholarship Dollars': 483045
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 25,
		'Federal School Code': 6435,
		'TAP College Name': 'ARNOT OGDEN MEDICAL CENTER',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 451,
		'Scholarship FTE': 436.5,
		'Scholarship Dollars': 705692.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 216,
		'Scholarship FTE': 206.25,
		'Scholarship Dollars': 411988
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 34.5,
		'Scholarship Dollars': 30250
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 65.5,
		'Scholarship Dollars': 54750
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 35344.3
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 67,
		'Scholarship FTE': 63.5,
		'Scholarship Dollars': 101847
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 40310
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 23,
		'Scholarship Dollars': 59498
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 124,
		'Scholarship FTE': 122,
		'Scholarship Dollars': 161905
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 54328.1
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 49463.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 376,
		'Scholarship FTE': 360.5,
		'Scholarship Dollars': 289377
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 113,
		'Scholarship FTE': 106.5,
		'Scholarship Dollars': 110737.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 55,
		'Federal School Code': 21068,
		'TAP College Name': 'BRAMSON ORT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 23.5,
		'Scholarship Dollars': 16700
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8560,
		'Federal School Code': 10051,
		'TAP College Name': 'LAQUARDIA COMMUNITY COLLEGE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 57,
		'Scholarship FTE': 55,
		'Scholarship Dollars': 106781.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8557,
		'Federal School Code': 14890,
		'TAP College Name': 'MADISON ONEIDA BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2545
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 162,
		'Scholarship FTE': 156,
		'Scholarship Dollars': 342791.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8545,
		'Federal School Code': 42062,
		'TAP College Name': 'THE DIGITAL FILM ACADEMCY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8532,
		'Federal School Code': 25754,
		'TAP College Name': 'INTERNATIONAL CULINARY CENTER',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 3.75,
		'Scholarship Dollars': 24356.25
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8528,
		'Federal School Code': 35373,
		'TAP College Name': 'NEW YORK AUTOMOTIVE & DIESEL INST',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 8.25,
		'Scholarship Dollars': 49927.36
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8510,
		'Federal School Code': 37733,
		'TAP College Name': 'CNW SCHOOL OF MASSAGE THERAPY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1623.75
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8509,
		'Federal School Code': 12652,
		'TAP College Name': 'ONONDAGA CORTLAND MADISON BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2310
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8507,
		'Federal School Code': 41676,
		'TAP College Name': 'FINGER LAKES SCHOOL OF MASSAGE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6156.74
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8505,
		'Federal School Code': 10147,
		'TAP College Name': 'WESTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8502,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 7354.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 19218
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 19.5,
		'Scholarship Dollars': 95997.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 21188.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7826,
		'Federal School Code': 17163,
		'TAP College Name': 'ART INSTITUTE OF NEW YORK CITY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 4330
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7738,
		'Federal School Code': 20937,
		'TAP College Name': 'LONG ISLAND BUSINESS INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4923
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 475
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 19496.25
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 2850
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7699,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE-2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 13.5,
		'Scholarship Dollars': 42218.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 36840
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7264,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE-BOHEMIA',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 25980
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 18121.7
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 13740
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 9317.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 55892.48
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 5041.57
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.96,
		'Scholarship Dollars': 23087.86
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6270,
		'Federal School Code': 25994,
		'TAP College Name': 'NY COLL HEALTH PROF',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 6870
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 725
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9.75,
		'Scholarship Dollars': 12820
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 7895,
		'Federal School Code': 7405,
		'TAP College Name': 'WOOD TOBE-COBURN SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 8181
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA DAY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6121,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA EVE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8506,
		'Federal School Code': 30962,
		'TAP College Name': 'CHARLES STUART SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 21461.25
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE 4 YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 17972.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 8518,
		'Federal School Code': 1255,
		'TAP College Name': 'LINCOLN TECHNICAL INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3565
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 68319
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 77,
		'Scholarship FTE': 63.17,
		'Scholarship Dollars': 299545.79
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 8.96,
		'Scholarship Dollars': 69832.66
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 26.71,
		'Scholarship Dollars': 72921.57
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 28.5,
		'Scholarship Dollars': 119602.95
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 35.04,
		'Scholarship Dollars': 93197.07
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 74.42,
		'Scholarship Dollars': 148513.26
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5960,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE BLAUVELT-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4.13,
		'Scholarship Dollars': 131050
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.38,
		'Scholarship Dollars': 90121.32
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 33287.5
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.17,
		'Scholarship Dollars': 84940
	},
	{
		'Academic Year': 2016,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 54447.66
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7833,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 9742.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1421,
		'Federal School Code': 42101,
		'TAP College Name': 'STELLA & CHARLES GUTTMAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 5500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 9379
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7826,
		'Federal School Code': 17163,
		'TAP College Name': 'ART INSTITUTE OF NEW YORK CITY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 7995
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 36,
		'Scholarship Dollars': 100744.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 5746.88
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7816,
		'Federal School Code': 31207,
		'TAP College Name': 'THE NY CONSERV FOR DRAMATIC ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 13890
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 85,
		'Scholarship FTE': 71.25,
		'Scholarship Dollars': 73317.52
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 7306.88
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 2325
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 378,
		'Scholarship FTE': 372,
		'Scholarship Dollars': 707697.75
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 148,
		'Scholarship FTE': 125.79,
		'Scholarship Dollars': 455456.39
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 475
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7718,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 278,
		'Scholarship FTE': 245.17,
		'Scholarship Dollars': 402862.53
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 16.29,
		'Scholarship Dollars': 53970.37
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 108,
		'Scholarship FTE': 102.5,
		'Scholarship Dollars': 112933
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 26.25,
		'Scholarship Dollars': 55670.05
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7264,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE-BOHEMIA',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 12315
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 156,
		'Scholarship FTE': 136.88,
		'Scholarship Dollars': 251136.85
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 6.13,
		'Scholarship Dollars': 6811.88
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7121,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR EVE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 29,
		'Scholarship Dollars': 24500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 184,
		'Scholarship FTE': 176.79,
		'Scholarship Dollars': 256747.09
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 30.5,
		'Scholarship Dollars': 160585
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 536,
		'Scholarship FTE': 475.96,
		'Scholarship Dollars': 448663.53
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 15900.68
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4.75,
		'Scholarship Dollars': 27209.25
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 143,
		'Scholarship FTE': 124.21,
		'Scholarship Dollars': 163972.05
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 17.33,
		'Scholarship Dollars': 60499.76
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 20049.36
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 29284.28
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 602,
		'Scholarship FTE': 533.75,
		'Scholarship Dollars': 722979.3
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.88,
		'Scholarship Dollars': 20158.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6270,
		'Federal School Code': 25994,
		'TAP College Name': 'NY COLL HEALTH PROF',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 11233.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 279,
		'Scholarship FTE': 236.88,
		'Scholarship Dollars': 294884.11
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 59529.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 225
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 63.5,
		'Scholarship Dollars': 333246
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 73,
		'Scholarship Dollars': 72627
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 337,
		'Scholarship FTE': 285.54,
		'Scholarship Dollars': 313983.44
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 11395
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA DAY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 19.17,
		'Scholarship Dollars': 37426.24
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6121,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA EVE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 15206.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE 4 YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 17434.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 134,
		'Scholarship FTE': 130.5,
		'Scholarship Dollars': 195396.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 127,
		'Scholarship FTE': 99.42,
		'Scholarship Dollars': 141555.49
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 15,
		'Scholarship Dollars': 57430
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 82,
		'Scholarship FTE': 59.5,
		'Scholarship Dollars': 73940.4
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 72,
		'Scholarship FTE': 54.75,
		'Scholarship Dollars': 252356.14
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 11.17,
		'Scholarship Dollars': 50362.72
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 118,
		'Scholarship FTE': 113.5,
		'Scholarship Dollars': 111277
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 166,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV NURSING PROG',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 10367.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 68.5,
		'Scholarship Dollars': 79020
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 28242.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 35.46,
		'Scholarship Dollars': 59200
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 31.67,
		'Scholarship Dollars': 92084.47
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 25.5,
		'Scholarship Dollars': 110728.09
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 40.29,
		'Scholarship Dollars': 103509.1
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 32.92,
		'Scholarship Dollars': 96301.57
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 78,
		'Scholarship FTE': 67.88,
		'Scholarship Dollars': 136222.65
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 111,
		'Scholarship FTE': 102,
		'Scholarship Dollars': 116361.01
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 18.42,
		'Scholarship Dollars': 21865
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5960,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE BLAUVELT-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 58520
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 6.38,
		'Scholarship Dollars': 139257.46
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 28.25,
		'Scholarship Dollars': 68261.4
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 58885
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 90264.97
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 153,
		'Scholarship FTE': 144.75,
		'Scholarship Dollars': 439407.75
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 647,
		'Scholarship FTE': 561,
		'Scholarship Dollars': 525392.13
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 23932.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.13,
		'Scholarship Dollars': 68642.56
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 85466.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 36.5,
		'Scholarship Dollars': 35750
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 47998.52
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 14630
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 53.08,
		'Scholarship Dollars': 73721.58
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 25145
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 73272.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 5076.4
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 4000
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 5.75,
		'Scholarship Dollars': 171694.64
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 72,
		'Scholarship FTE': 63,
		'Scholarship Dollars': 54500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 62,
		'Scholarship FTE': 61.5,
		'Scholarship Dollars': 102085.16
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 309,
		'Scholarship FTE': 298.5,
		'Scholarship Dollars': 331141.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 43.5,
		'Scholarship Dollars': 154471.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 12990
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 15452.7
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 100,
		'Scholarship FTE': 96.5,
		'Scholarship Dollars': 89367
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 26495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.13,
		'Scholarship Dollars': 70832.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 23.25,
		'Scholarship Dollars': 54513.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 52.25,
		'Scholarship Dollars': 51780.75
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 77917.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5410,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 10495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 5000
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 92547.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 209401.88
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 287,
		'Federal School Code': 10153,
		'TAP College Name': 'HELENE FULD SCHOOL REG NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 2165
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 45.5,
		'Scholarship Dollars': 256243.2
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 398,
		'Scholarship FTE': 389.25,
		'Scholarship Dollars': 356458
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 76960
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 20000
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1243,
		'Scholarship FTE': 1138.58,
		'Scholarship Dollars': 2125884.47
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.13,
		'Scholarship Dollars': 67863.24
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.63,
		'Scholarship Dollars': 117036.91
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 103,
		'Scholarship FTE': 98.04,
		'Scholarship Dollars': 283040.64
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 10.75,
		'Scholarship Dollars': 29994.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 11945
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 53890
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 126,
		'Scholarship FTE': 124.5,
		'Scholarship Dollars': 133404
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 16648.52
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5024,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE DELHI NURSING PROG',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 38505.48
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 56.5,
		'Scholarship Dollars': 98016
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 55,
		'Federal School Code': 21068,
		'TAP College Name': 'BRAMSON ORT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 4851.25
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 64,
		'Scholarship FTE': 61.29,
		'Scholarship Dollars': 83871.59
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 78,
		'Scholarship FTE': 74.5,
		'Scholarship Dollars': 118589.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.96,
		'Scholarship Dollars': 59034.99
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 78.33,
		'Scholarship Dollars': 87121.57
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 14630
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 33287.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 425,
		'Scholarship FTE': 408.75,
		'Scholarship Dollars': 840442.25
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5011,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.75,
		'Scholarship Dollars': 90602.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 37097.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 92,
		'Scholarship FTE': 90.25,
		'Scholarship Dollars': 130235.59
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 21,
		'Scholarship Dollars': 30300
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 90,
		'Scholarship FTE': 85.25,
		'Scholarship Dollars': 264739.93
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 55.29,
		'Scholarship Dollars': 176660.6
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 99307.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 5.88,
		'Scholarship Dollars': 42688.88
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 97,
		'Scholarship FTE': 94.5,
		'Scholarship Dollars': 71750
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 517,
		'Scholarship FTE': 494.96,
		'Scholarship Dollars': 770851
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 41,
		'Scholarship Dollars': 92833.85
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 16.92,
		'Scholarship Dollars': 109266.4
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 15,
		'Scholarship Dollars': 41914
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 23.5,
		'Scholarship Dollars': 57990
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 21,
		'Scholarship Dollars': 60403.19
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 44,
		'Scholarship Dollars': 149621.42
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 39145.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 44.5,
		'Scholarship Dollars': 383676.96
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2321,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INST QRTLY PROGRAMS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.67,
		'Scholarship Dollars': 9326.68
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 55207.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 143,
		'Scholarship FTE': 136.63,
		'Scholarship Dollars': 366040.76
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.92,
		'Scholarship Dollars': 26207.97
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 17867
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 16.58,
		'Scholarship Dollars': 62154.11
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 332,
		'Scholarship FTE': 323.38,
		'Scholarship Dollars': 607285.55
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 195,
		'Scholarship FTE': 183.46,
		'Scholarship Dollars': 179214.71
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 147,
		'Scholarship FTE': 136,
		'Scholarship Dollars': 229376.29
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 23439
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 10.88,
		'Scholarship Dollars': 45746.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 99,
		'Scholarship FTE': 94,
		'Scholarship Dollars': 289663.49
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 4523
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 51513.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 23.33,
		'Scholarship Dollars': 42682.11
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 218,
		'Scholarship FTE': 200.13,
		'Scholarship Dollars': 559410.17
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 8220
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 36365
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 183,
		'Scholarship FTE': 172.17,
		'Scholarship Dollars': 691257.51
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 9.04,
		'Scholarship Dollars': 12549
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 8.63,
		'Scholarship Dollars': 14255.8
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 107,
		'Scholarship FTE': 104.88,
		'Scholarship Dollars': 172456.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 71.92,
		'Scholarship Dollars': 425563.46
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 227,
		'Scholarship FTE': 211.92,
		'Scholarship Dollars': 561788.25
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 22.29,
		'Scholarship Dollars': 83099.67
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 15511.6
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 570,
		'Scholarship FTE': 546.5,
		'Scholarship Dollars': 1022666.31
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 12225.75
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 41.71,
		'Scholarship Dollars': 78785.8
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 62421
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 157,
		'Scholarship FTE': 147.5,
		'Scholarship Dollars': 244625.72
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 23.38,
		'Scholarship Dollars': 48378
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 2750
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 149,
		'Scholarship FTE': 102.71,
		'Scholarship Dollars': 534392.52
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 97,
		'Scholarship FTE': 69.46,
		'Scholarship Dollars': 162938.73
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 115,
		'Scholarship FTE': 83.25,
		'Scholarship Dollars': 155172.25
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 20000
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 45287.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 55.13,
		'Scholarship Dollars': 63663.88
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 124,
		'Scholarship FTE': 116.88,
		'Scholarship Dollars': 732493.14
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 119,
		'Scholarship FTE': 113.5,
		'Scholarship Dollars': 724148.69
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 17404.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 83521.18
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 155,
		'Scholarship FTE': 138.63,
		'Scholarship Dollars': 289622.08
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 94,
		'Scholarship FTE': 72.04,
		'Scholarship Dollars': 361244.41
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 438,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING MED ASSIST",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 6995.01
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 170,
		'Scholarship FTE': 157.5,
		'Scholarship Dollars': 378540.11
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 14.25,
		'Scholarship Dollars': 60137.75
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 15.04,
		'Scholarship Dollars': 50913.34
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 361,
		'Scholarship FTE': 336.63,
		'Scholarship Dollars': 881007.15
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 26,
		'Scholarship Dollars': 60323.75
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 437,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 11846.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 75.96,
		'Scholarship Dollars': 197655.98
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 72,
		'Scholarship FTE': 53.67,
		'Scholarship Dollars': 257699.1
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1226,
		'Scholarship FTE': 1180.46,
		'Scholarship Dollars': 3022096.7
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 52.92,
		'Scholarship Dollars': 337199.97
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 36896.2
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 17,
		'Scholarship Dollars': 67140
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1008,
		'Scholarship FTE': 935.42,
		'Scholarship Dollars': 1792109.6
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 59.67,
		'Scholarship Dollars': 173799.28
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 92,
		'Scholarship FTE': 82.79,
		'Scholarship Dollars': 106691.34
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 37.5,
		'Scholarship Dollars': 40323
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12.63,
		'Scholarship Dollars': 17289.38
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 136,
		'Scholarship FTE': 135,
		'Scholarship Dollars': 175071
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 459,
		'Scholarship FTE': 449,
		'Scholarship Dollars': 418284.85
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 110,
		'Scholarship FTE': 107.5,
		'Scholarship Dollars': 379439
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 68.5,
		'Scholarship Dollars': 119341
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 35.88,
		'Scholarship Dollars': 42100.4
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 33214.43
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 8500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 39.5,
		'Scholarship Dollars': 57141
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 64.63,
		'Scholarship Dollars': 145810.53
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 118,
		'Scholarship FTE': 108.25,
		'Scholarship Dollars': 383617.15
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 838,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING MED/DENTAL",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 22336.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 16.92,
		'Scholarship Dollars': 69234
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8557,
		'Federal School Code': 14890,
		'TAP College Name': 'MADISON ONEIDA BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8554,
		'Federal School Code': 11617,
		'TAP College Name': 'NY METHODIST HOSPITAL CAHE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 65618.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8552,
		'Federal School Code': 0,
		'TAP College Name': 'BRANFORD HALL CAREER INST BOHEMIA',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8550,
		'Federal School Code': 15375,
		'TAP College Name': 'EASTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 17986.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8547,
		'Federal School Code': 0,
		'TAP College Name': 'CAMBRIDGE BUSINESS INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 4871.25
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8541,
		'Federal School Code': 42238,
		'TAP College Name': 'ELECTRICAL TRAINING CENTER',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 23.83,
		'Scholarship Dollars': 45179.74
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8537,
		'Federal School Code': 10052,
		'TAP College Name': 'JEFFERSON-LEWIS BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2708.7
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8533,
		'Federal School Code': 7804,
		'TAP College Name': 'STAR CAREER ACADEMY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 8118.75
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 441,
		'Scholarship FTE': 428.5,
		'Scholarship Dollars': 592777
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 148,
		'Scholarship FTE': 145.5,
		'Scholarship Dollars': 164564.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 72189.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 4222.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8532,
		'Federal School Code': 25754,
		'TAP College Name': 'INTERNATIONAL CULINARY CENTER',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 18041.25
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8528,
		'Federal School Code': 35373,
		'TAP College Name': 'NEW YORK AUTOMOTIVE & DIESEL INST',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 9.25,
		'Scholarship Dollars': 54425.25
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.58,
		'Scholarship Dollars': 25642
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8522,
		'Federal School Code': 0,
		'TAP College Name': 'NEW YORK FILM ACADEMY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8518,
		'Federal School Code': 1255,
		'TAP College Name': 'LINCOLN TECHNICAL INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 19485
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 97,
		'Scholarship FTE': 93,
		'Scholarship Dollars': 96547
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 6075
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8514,
		'Federal School Code': 41443,
		'TAP College Name': 'INSTITUTE OF CULINARY EDUCATION',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8511,
		'Federal School Code': 7518,
		'TAP College Name': 'APEX TECHNICAL SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 860.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 32.5,
		'Scholarship Dollars': 48997
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8510,
		'Federal School Code': 37733,
		'TAP College Name': 'CNW SCHOOL OF MASSAGE THERAPY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6495
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8509,
		'Federal School Code': 12652,
		'TAP College Name': 'ONONDAGA CORTLAND MADISON BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3247.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 23235
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 18.5,
		'Scholarship Dollars': 63281
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8508,
		'Federal School Code': 31153,
		'TAP College Name': 'GENESEE VALLEY BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4560
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8506,
		'Federal School Code': 30962,
		'TAP College Name': 'CHARLES STUART SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 8970
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 16.96,
		'Scholarship Dollars': 33677
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8505,
		'Federal School Code': 10147,
		'TAP College Name': 'WESTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 9428.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8502,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 9742.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 762,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE - WEEKEND',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.79,
		'Scholarship Dollars': 5104.4
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 48,
		'Scholarship FTE': 39.21,
		'Scholarship Dollars': 81745.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 25630
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7952,
		'Federal School Code': 10813,
		'TAP College Name': 'AMERICAN ACADEMY MCALLISTER INST.',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 13816
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1674,
		'Federal School Code': 11617,
		'TAP College Name': 'NEW YORK  METHODIST HOSPITAL',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 28364
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7895,
		'Federal School Code': 7405,
		'TAP College Name': 'WOOD TOBE-COBURN SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 13232.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 124476.5
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 140,
		'Scholarship FTE': 135.17,
		'Scholarship Dollars': 232135.59
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 11,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 12.13,
		'Scholarship Dollars': 87019.88
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 25,
		'Federal School Code': 6435,
		'TAP College Name': 'ARNOT OGDEN MEDICAL CENTER',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 358,
		'Scholarship FTE': 342.5,
		'Scholarship Dollars': 291758
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 243,
		'Scholarship FTE': 236.21,
		'Scholarship Dollars': 454639.24
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 22.54,
		'Scholarship Dollars': 42679.84
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 72,
		'Scholarship FTE': 68.88,
		'Scholarship Dollars': 117144.7
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 1535,
		'Federal School Code': 21579,
		'TAP College Name': 'ISABELLA GRAHAM HART SCH PRAC NUR',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2015,
		'TAP College Code': 7837,
		'Federal School Code': 107329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 700
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 25,
		'Scholarship Dollars': 182281
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1650,
		'Federal School Code': 5064,
		'TAP College Name': 'ST JAMES MERCY HOSP SCH XRAY TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 225
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7845,
		'Federal School Code': 4811,
		'TAP College Name': 'EVEREST INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7839,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3097.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 80.38,
		'Scholarship Dollars': 142113.23
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1535,
		'Federal School Code': 21579,
		'TAP College Name': 'ISABELLA GRAHAM HART SCH PRAC NUR',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7837,
		'Federal School Code': 107329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 950
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7833,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 9292.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1421,
		'Federal School Code': 42101,
		'TAP College Name': 'STELLA & CHARLES GUTTMAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 30453.71
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7826,
		'Federal School Code': 17163,
		'TAP College Name': 'ART INSTITUTE OF NEW YORK CITY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.67,
		'Scholarship Dollars': 13062.66
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 19.88,
		'Scholarship Dollars': 28002.94
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 33,
		'Scholarship Dollars': 65621.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.38,
		'Scholarship Dollars': 9784.38
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7816,
		'Federal School Code': 31207,
		'TAP College Name': 'THE NY CONSERV FOR DRAMATIC ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 68.75,
		'Scholarship Dollars': 70704.86
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 11341.25
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 35105.4
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 297,
		'Scholarship FTE': 290,
		'Scholarship Dollars': 592039.25
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 124,
		'Scholarship FTE': 106.54,
		'Scholarship Dollars': 363382.32
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 43656.6
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7699,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE-2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 9292.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 273,
		'Scholarship FTE': 237.04,
		'Scholarship Dollars': 382114.25
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 25,
		'Scholarship Dollars': 69486.67
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 296,
		'Scholarship FTE': 287,
		'Scholarship Dollars': 315032
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 95,
		'Scholarship FTE': 88.92,
		'Scholarship Dollars': 113353.15
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 27.25,
		'Scholarship Dollars': 51809.35
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 150
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7264,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE-BOHEMIA',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 20828.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 161,
		'Scholarship FTE': 132.67,
		'Scholarship Dollars': 255308.84
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 4250
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7121,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR EVE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 16261.88
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 33,
		'Scholarship Dollars': 129234.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 524,
		'Scholarship FTE': 453.5,
		'Scholarship Dollars': 353154.12
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 17170.01
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6936,
		'Federal School Code': 25408,
		'TAP College Name': '878 EDUCATION, LLC',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 137,
		'Scholarship FTE': 117,
		'Scholarship Dollars': 152747.78
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 9792.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 73936.24
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 177,
		'Scholarship FTE': 170.75,
		'Scholarship Dollars': 201326
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.33,
		'Scholarship Dollars': 8912.92
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 552,
		'Scholarship FTE': 492.83,
		'Scholarship Dollars': 566531.05
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 10.17,
		'Scholarship Dollars': 32547.58
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 72613.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 263,
		'Scholarship FTE': 215.17,
		'Scholarship Dollars': 244688.27
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 10695
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA DAY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 72,
		'Scholarship FTE': 69.63,
		'Scholarship Dollars': 76939.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 295,
		'Scholarship FTE': 246.5,
		'Scholarship Dollars': 226279.79
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6121,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA EVE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 14281.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 10401
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 23.46,
		'Scholarship Dollars': 53477.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 27731
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 60.04,
		'Scholarship Dollars': 263560.73
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 318,
		'Scholarship FTE': 304,
		'Scholarship Dollars': 304540.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 273,
		'Scholarship FTE': 262.58,
		'Scholarship Dollars': 556879.98
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 64,
		'Scholarship Dollars': 402330
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 131,
		'Scholarship FTE': 128.5,
		'Scholarship Dollars': 221752.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 115,
		'Scholarship FTE': 87.42,
		'Scholarship Dollars': 121048.04
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 11.13,
		'Scholarship Dollars': 66048.55
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 34.67,
		'Scholarship Dollars': 90661.78
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 89,
		'Scholarship FTE': 65.67,
		'Scholarship Dollars': 81493.25
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 118148.33
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 31,
		'Scholarship Dollars': 97934.1
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 43.5,
		'Scholarship Dollars': 40140
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 29.88,
		'Scholarship Dollars': 61504.35
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 53.5,
		'Scholarship Dollars': 98917.02
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5960,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE BLAUVELT-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 16420
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 50.88,
		'Scholarship Dollars': 126757.67
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 146754.04
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 62757.6
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 54.5,
		'Scholarship Dollars': 55072.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 80.54,
		'Scholarship Dollars': 126306.17
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 21.79,
		'Scholarship Dollars': 20076.68
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 44785
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 66825.32
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 22.29,
		'Scholarship Dollars': 44823.2
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.46,
		'Scholarship Dollars': 103219.98
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.88,
		'Scholarship Dollars': 22908.52
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 588,
		'Scholarship FTE': 498.5,
		'Scholarship Dollars': 467005.31
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 18585
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 7315
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4.25,
		'Scholarship Dollars': 124775.39
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 35.5,
		'Scholarship Dollars': 35750
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 193087.96
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 17303.72
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 38.5,
		'Scholarship Dollars': 33750
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 153,
		'Scholarship FTE': 144,
		'Scholarship Dollars': 401401.48
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 40.83,
		'Scholarship Dollars': 66741.58
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 25,
		'Scholarship Dollars': 16450
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 40000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 46195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 8000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 143442.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5410,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 14392
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 314,
		'Scholarship FTE': 300.5,
		'Scholarship Dollars': 319498
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 39.5,
		'Scholarship Dollars': 138488.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 15525
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 12390
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 105,
		'Scholarship FTE': 101,
		'Scholarship Dollars': 97578
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5345,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 184905.04
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 74,
		'Scholarship FTE': 72.5,
		'Scholarship Dollars': 99619
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 28.25,
		'Scholarship Dollars': 73383
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 59,
		'Scholarship FTE': 54.38,
		'Scholarship Dollars': 145438.12
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 39191.85
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.38,
		'Scholarship Dollars': 40919.16
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 19960
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 54948.08
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 32.08,
		'Scholarship Dollars': 161724.61
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 371,
		'Scholarship FTE': 364.5,
		'Scholarship Dollars': 297895
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 36074
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 69637.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 833,
		'Scholarship FTE': 763.21,
		'Scholarship Dollars': 1209955.06
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 52738.2
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 17315
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 41.33,
		'Scholarship Dollars': 77962.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 142,
		'Scholarship FTE': 135.75,
		'Scholarship Dollars': 123134
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 93,
		'Scholarship FTE': 89,
		'Scholarship Dollars': 81000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 287,
		'Federal School Code': 10153,
		'TAP College Name': 'HELENE FULD SCHOOL REG NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 53,
		'Scholarship Dollars': 182082.19
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 8.79,
		'Scholarship Dollars': 49292.88
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 20000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5011,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 40602.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 107,
		'Scholarship FTE': 106,
		'Scholarship Dollars': 124384
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 43.38,
		'Scholarship Dollars': 81653.9
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 58749
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 92,
		'Scholarship FTE': 89.5,
		'Scholarship Dollars': 138987.9
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 86330
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 398,
		'Scholarship FTE': 384,
		'Scholarship Dollars': 620713
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.25,
		'Scholarship Dollars': 16732.85
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 15.5,
		'Scholarship Dollars': 103235.65
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 64,
		'Scholarship FTE': 63,
		'Scholarship Dollars': 136463.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 77,
		'Scholarship FTE': 74.5,
		'Scholarship Dollars': 131110.48
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 63082.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 73523
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 48160.92
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 60,
		'Scholarship FTE': 54.63,
		'Scholarship Dollars': 215485.61
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 45,
		'Scholarship Dollars': 110728.34
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2321,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INST QRTLY PROGRAMS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.67,
		'Scholarship Dollars': 7028.35
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 520,
		'Scholarship FTE': 499,
		'Scholarship Dollars': 687485.31
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 31.42,
		'Scholarship Dollars': 75069.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 46462.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 7320
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 14310
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 22112
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2270,
		'Federal School Code': 25994,
		'TAP College Name': 'NEW YORK COLL OF HEALTH PROFESSIO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 9292.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 40,
		'Scholarship Dollars': 101624.89
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 95,
		'Scholarship FTE': 94,
		'Scholarship Dollars': 100902
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 58195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 34.5,
		'Scholarship Dollars': 298902.21
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 36035.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 22805.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 112,
		'Scholarship FTE': 109,
		'Scholarship Dollars': 273698.68
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 16,
		'Scholarship Dollars': 76452
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 5650
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 105,
		'Scholarship FTE': 95.04,
		'Scholarship Dollars': 127787.37
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 139,
		'Scholarship FTE': 133.75,
		'Scholarship Dollars': 249237.47
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 29.58,
		'Scholarship Dollars': 67475.7
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.92,
		'Scholarship Dollars': 4195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 112,
		'Scholarship FTE': 106,
		'Scholarship Dollars': 265256.22
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 45745.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 8.79,
		'Scholarship Dollars': 13951.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 271,
		'Scholarship FTE': 258.83,
		'Scholarship Dollars': 565580.17
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 36.17,
		'Scholarship Dollars': 80226.15
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 184,
		'Scholarship FTE': 169.33,
		'Scholarship Dollars': 397684.65
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 11.5,
		'Scholarship Dollars': 37739.2
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 22.92,
		'Scholarship Dollars': 83929.44
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 153,
		'Scholarship FTE': 147.75,
		'Scholarship Dollars': 537815.12
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 15,
		'Scholarship Dollars': 22839.36
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 15189
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 64.17,
		'Scholarship Dollars': 381917.46
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 188,
		'Scholarship FTE': 175,
		'Scholarship Dollars': 481655.13
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 39,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 67139.31
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 32.08,
		'Scholarship Dollars': 67777.97
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 516,
		'Scholarship FTE': 500.5,
		'Scholarship Dollars': 843075.14
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 113,
		'Scholarship FTE': 82.83,
		'Scholarship Dollars': 246216
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 29,
		'Scholarship Dollars': 62330.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 15,
		'Scholarship Dollars': 41067.25
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 109,
		'Scholarship FTE': 104.25,
		'Scholarship Dollars': 145053.26
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8.25,
		'Scholarship Dollars': 55084.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 135,
		'Scholarship FTE': 130.25,
		'Scholarship Dollars': 234200.04
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 102,
		'Scholarship FTE': 78.58,
		'Scholarship Dollars': 125517.91
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 20137
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 158,
		'Scholarship FTE': 105.21,
		'Scholarship Dollars': 596031.08
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 24.5,
		'Scholarship Dollars': 83777.25
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 113,
		'Scholarship FTE': 105.88,
		'Scholarship Dollars': 494638.63
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 116,
		'Scholarship FTE': 102.75,
		'Scholarship Dollars': 660244.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 74,
		'Scholarship FTE': 56.58,
		'Scholarship Dollars': 296088.6
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 17.54,
		'Scholarship Dollars': 76561.9
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 175,
		'Scholarship FTE': 152.54,
		'Scholarship Dollars': 390071.44
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 15.63,
		'Scholarship Dollars': 51028.08
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 210,
		'Federal School Code': 6448,
		'TAP College Name': 'THE BELANGER SCHOOL OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 437,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 9742.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 167,
		'Scholarship FTE': 152.71,
		'Scholarship Dollars': 299646.67
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 32.58,
		'Scholarship Dollars': 89929.9
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 76.63,
		'Scholarship Dollars': 215441.88
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 348,
		'Scholarship FTE': 324.83,
		'Scholarship Dollars': 973300.95
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 50.42,
		'Scholarship Dollars': 221286.17
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 52.75,
		'Scholarship Dollars': 393126
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 19.5,
		'Scholarship Dollars': 73352
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 1625
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 33.29,
		'Scholarship Dollars': 48860
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 82,
		'Scholarship FTE': 71.38,
		'Scholarship Dollars': 182627.03
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 986,
		'Scholarship FTE': 942.21,
		'Scholarship Dollars': 2049429.43
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3097.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 42,
		'Scholarship Dollars': 60434.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 21.13,
		'Scholarship Dollars': 41011.88
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 42.88,
		'Scholarship Dollars': 67207.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 862,
		'Scholarship FTE': 793.83,
		'Scholarship Dollars': 1340764.24
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 15834.76
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 40.75,
		'Scholarship Dollars': 56759.8
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 90,
		'Scholarship FTE': 84.04,
		'Scholarship Dollars': 112369.08
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 34258.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8552,
		'Federal School Code': 0,
		'TAP College Name': 'BRANFORD HALL CAREER INST BOHEMIA',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 9292.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8550,
		'Federal School Code': 15375,
		'TAP College Name': 'EASTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3097.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 34.5,
		'Scholarship Dollars': 30661.2
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8549,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8548,
		'Federal School Code': 30816,
		'TAP College Name': 'DCMO BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 1464.9
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 86,
		'Scholarship FTE': 83,
		'Scholarship Dollars': 396480.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 77,
		'Scholarship FTE': 75.25,
		'Scholarship Dollars': 106529
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 102,
		'Scholarship FTE': 76.96,
		'Scholarship Dollars': 178978.01
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8547,
		'Federal School Code': 0,
		'TAP College Name': 'CAMBRIDGE BUSINESS INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 7743.75
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8546,
		'Federal School Code': 0,
		'TAP College Name': 'FOCUS PERSONAL TRAINING INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3097.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 49235
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8545,
		'Federal School Code': 42062,
		'TAP College Name': 'THE DIGITAL FILM ACADEMCY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8544,
		'Federal School Code': 0,
		'TAP College Name': 'PAUL MITCHELL THE SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2995
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 14,
		'Scholarship Dollars': 9000
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2051,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3097.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8542,
		'Federal School Code': 0,
		'TAP College Name': 'COMPU21 CORP',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3097.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8539,
		'Federal School Code': 12293,
		'TAP College Name': 'VEEB NASSAU COUNTY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3097.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 46950.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8537,
		'Federal School Code': 10052,
		'TAP College Name': 'JEFFERSON-LEWIS BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 16557.2
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8535,
		'Federal School Code': 15204,
		'TAP College Name': 'WASH-SAR-WAR-HAM-ESS BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4112.4
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.92,
		'Scholarship Dollars': 2831.46
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 117,
		'Scholarship FTE': 101.75,
		'Scholarship Dollars': 293599
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 838,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING MED/DENTAL",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 9261.99
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8533,
		'Federal School Code': 7804,
		'TAP College Name': 'STAR CAREER ACADEMY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 15487.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8532,
		'Federal School Code': 25754,
		'TAP College Name': 'INTERNATIONAL CULINARY CENTER',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 29.04,
		'Scholarship Dollars': 65333.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8531,
		'Federal School Code': 12557,
		'TAP College Name': 'ERIE 1 BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 1910
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8528,
		'Federal School Code': 35373,
		'TAP College Name': 'NEW YORK AUTOMOTIVE & DIESEL INST',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 6.25,
		'Scholarship Dollars': 35366
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 37994
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.88,
		'Scholarship Dollars': 10218.13
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8522,
		'Federal School Code': 0,
		'TAP College Name': 'NEW YORK FILM ACADEMY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6195
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8518,
		'Federal School Code': 1255,
		'TAP College Name': 'LINCOLN TECHNICAL INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 12390
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 13820
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8511,
		'Federal School Code': 7518,
		'TAP College Name': 'APEX TECHNICAL SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 23676.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8510,
		'Federal School Code': 37733,
		'TAP College Name': 'CNW SCHOOL OF MASSAGE THERAPY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 3097.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 134,
		'Scholarship FTE': 132.04,
		'Scholarship Dollars': 174806
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 18.5,
		'Scholarship Dollars': 66391
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 7715
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8509,
		'Federal School Code': 12652,
		'TAP College Name': 'ONONDAGA CORTLAND MADISON BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 9142.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8506,
		'Federal School Code': 30962,
		'TAP College Name': 'CHARLES STUART SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 9517.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 66954
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8505,
		'Federal School Code': 10147,
		'TAP College Name': 'WESTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 11490
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8502,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 10801.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 85,
		'Scholarship Dollars': 106622
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 34498
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 3.67,
		'Scholarship Dollars': 21245.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7952,
		'Federal School Code': 10813,
		'TAP College Name': 'AMERICAN ACADEMY MCALLISTER INST.',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 19348.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 23.33,
		'Scholarship Dollars': 63524.71
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7895,
		'Federal School Code': 7405,
		'TAP College Name': 'WOOD TOBE-COBURN SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 12966
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7870,
		'Federal School Code': 9077,
		'TAP College Name': 'UTICA SCHOOL OF COMMERCE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 675
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 132,
		'Scholarship FTE': 125,
		'Scholarship Dollars': 197008.48
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 11,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 82824
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 25,
		'Federal School Code': 6435,
		'TAP College Name': 'ARNOT OGDEN MEDICAL CENTER',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 138,
		'Scholarship FTE': 137,
		'Scholarship Dollars': 171936
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 630,
		'Scholarship FTE': 615.83,
		'Scholarship Dollars': 576820.5
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 2875
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 9945
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 30.08,
		'Scholarship Dollars': 50762.9
	},
	{
		'Academic Year': 2014,
		'TAP College Code': 7863,
		'Federal School Code': 21634,
		'TAP College Name': 'NEW YORK CAREER INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.58,
		'Scholarship Dollars': 14373.16
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 14504
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.13,
		'Scholarship Dollars': 2735
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7718,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7699,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE-2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 287,
		'Scholarship FTE': 274.75,
		'Scholarship Dollars': 575812
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 88,
		'Scholarship FTE': 69.75,
		'Scholarship Dollars': 66273.3
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 20.88,
		'Scholarship Dollars': 68450.74
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 111,
		'Scholarship FTE': 89.5,
		'Scholarship Dollars': 198540.47
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7491,
		'Federal School Code': 11647,
		'TAP College Name': 'SANFORD BROWN INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 4706.66
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4080
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 106,
		'Scholarship FTE': 102.13,
		'Scholarship Dollars': 116806.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 262,
		'Scholarship FTE': 226.75,
		'Scholarship Dollars': 271358.59
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7440,
		'Federal School Code': 12107,
		'TAP College Name': 'INST OF DESIGN & CONSTRUCTION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7264,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE-PATCHOGUE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 22908
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 25.25,
		'Scholarship Dollars': 40288.95
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 7060
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7260,
		'Federal School Code': 9043,
		'TAP College Name': 'ELMIRA BUSINESS INST',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 450
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 80387
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 146,
		'Scholarship FTE': 114.88,
		'Scholarship Dollars': 180829.33
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 3697.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7121,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR EVE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 15474.38
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 485,
		'Scholarship FTE': 420.88,
		'Scholarship Dollars': 363528.18
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.67,
		'Scholarship Dollars': 10275
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6936,
		'Federal School Code': 25408,
		'TAP College Name': '878 EDUCATION, LLC',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 467,
		'Scholarship FTE': 453.5,
		'Scholarship Dollars': 367750
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 24.71,
		'Scholarship Dollars': 35550.63
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 10320
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 135,
		'Scholarship FTE': 107.63,
		'Scholarship Dollars': 127542.28
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.63,
		'Scholarship Dollars': 14563.38
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 28.42,
		'Scholarship Dollars': 99664.35
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 546,
		'Scholarship FTE': 485.67,
		'Scholarship Dollars': 479096.57
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8.75,
		'Scholarship Dollars': 32552.95
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8.38,
		'Scholarship Dollars': 71491.88
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 75,
		'Scholarship FTE': 72.25,
		'Scholarship Dollars': 102824.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 234,
		'Scholarship FTE': 196.29,
		'Scholarship Dollars': 185076.56
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 9.75,
		'Scholarship Dollars': 9325
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA DAY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 3697.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 282,
		'Scholarship FTE': 249.71,
		'Scholarship Dollars': 285675.7
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE 4 YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 225
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 20440
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 124,
		'Scholarship FTE': 121.5,
		'Scholarship Dollars': 201708
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 21.92,
		'Scholarship Dollars': 39447.65
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.83,
		'Scholarship Dollars': 26273.18
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 47.04,
		'Scholarship Dollars': 203789.89
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 104,
		'Scholarship FTE': 72.79,
		'Scholarship Dollars': 86298.49
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 46285.69
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 42.88,
		'Scholarship Dollars': 125471.24
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 37,
		'Scholarship Dollars': 30270
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 58.46,
		'Scholarship Dollars': 84555.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 77391
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 25.13,
		'Scholarship Dollars': 94809.89
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 25,
		'Scholarship Dollars': 66993.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 48,
		'Scholarship FTE': 43.13,
		'Scholarship Dollars': 80434.05
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5965,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY-DOCTORAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.88,
		'Scholarship Dollars': 26798.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 309,
		'Scholarship FTE': 292.5,
		'Scholarship Dollars': 293675
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 260,
		'Scholarship FTE': 250.63,
		'Scholarship Dollars': 492582.25
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 197,
		'Scholarship FTE': 191,
		'Scholarship Dollars': 237094
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 103,
		'Scholarship FTE': 89.58,
		'Scholarship Dollars': 115246.91
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 43.63,
		'Scholarship Dollars': 109811
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 73535
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 65785.26
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 18.38,
		'Scholarship Dollars': 17645.4
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5805,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 59414.68
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 653,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 16790.04
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 39,
		'Scholarship FTE': 26.33,
		'Scholarship Dollars': 34764.38
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.38,
		'Scholarship Dollars': 86401.94
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.25,
		'Scholarship Dollars': 100145.16
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 12890
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 34630
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 4.75,
		'Scholarship Dollars': 107007.06
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 74,
		'Scholarship FTE': 72,
		'Scholarship Dollars': 412009.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 591,
		'Scholarship FTE': 489.83,
		'Scholarship Dollars': 479510.38
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 42.5,
		'Scholarship Dollars': 39750
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5672,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 1671.74
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5645,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY  BARUCH COLL GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 736.88
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 19395
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 130102.2
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 48,
		'Scholarship FTE': 42.96,
		'Scholarship Dollars': 72561.63
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 5500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1473.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 42.5,
		'Scholarship Dollars': 120989
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5600,
		'Federal School Code': 38813,
		'TAP College Name': 'GRADUATE COLLEGE UNION UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 19472.62
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 43,
		'Scholarship Dollars': 37500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 67,
		'Scholarship FTE': 64,
		'Scholarship Dollars': 68866.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 317,
		'Scholarship FTE': 306,
		'Scholarship Dollars': 300645
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 102,
		'Scholarship FTE': 95,
		'Scholarship Dollars': 77000
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 29829.38
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.38,
		'Scholarship Dollars': 101801.64
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 61.5,
		'Scholarship Dollars': 154156
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 6.75,
		'Scholarship Dollars': 175988.84
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 65140
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 66730
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 20000
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 397,
		'Scholarship FTE': 389.83,
		'Scholarship Dollars': 322457.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5265,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5216,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1322.68
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 151,
		'Scholarship FTE': 139.5,
		'Scholarship Dollars': 382779.69
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 610,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 126,
		'Scholarship FTE': 122.5,
		'Scholarship Dollars': 100213.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 779,
		'Scholarship FTE': 735.46,
		'Scholarship Dollars': 963093.61
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 44142.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 7315
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4.08,
		'Scholarship Dollars': 17390.22
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 24003
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 28365
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 605,
		'Federal School Code': 30277,
		'TAP College Name': 'PACIFIC COLLEGE OF ORIENTAL MED',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 1965
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 107,
		'Scholarship FTE': 104,
		'Scholarship Dollars': 81325
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.83,
		'Scholarship Dollars': 41951.12
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 20000
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 116,
		'Scholarship FTE': 113.67,
		'Scholarship Dollars': 167674.16
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 15972.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 25895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 43.5,
		'Scholarship Dollars': 75275
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 163,
		'Scholarship FTE': 154.25,
		'Scholarship Dollars': 157668.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 100,
		'Scholarship FTE': 98.5,
		'Scholarship Dollars': 85950
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 67,
		'Scholarship Dollars': 60775
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 39.29,
		'Scholarship Dollars': 137099.07
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 425,
		'Scholarship FTE': 412.29,
		'Scholarship Dollars': 581996.57
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 36.21,
		'Scholarship Dollars': 55736.33
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 21,
		'Scholarship Dollars': 62947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 15315.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 12.96,
		'Scholarship Dollars': 88992.23
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 62,
		'Scholarship Dollars': 176974
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 64,
		'Scholarship FTE': 60.75,
		'Scholarship Dollars': 198687.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 18,
		'Scholarship Dollars': 91062.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9.13,
		'Scholarship Dollars': 38748.55
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 28.25,
		'Scholarship Dollars': 50190.3
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 31.75,
		'Scholarship Dollars': 96410
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 36,
		'Scholarship Dollars': 74709.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 287,
		'Federal School Code': 10153,
		'TAP College Name': 'HELENE FULD SCHOOL REG NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 2465
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 15,
		'Scholarship Dollars': 60117.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 16,
		'Scholarship Dollars': 11375
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2321,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INST QRTLY PROGRAMS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 333.34
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 23580
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 36.25,
		'Scholarship Dollars': 314156.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 21250
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2270,
		'Federal School Code': 25994,
		'TAP College Name': 'NEW YORK COLL OF HEALTH PROFESSIO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 68,
		'Scholarship Dollars': 96075
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 102,
		'Scholarship FTE': 95.63,
		'Scholarship Dollars': 169974.89
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 20495
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 16999
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 140,
		'Scholarship FTE': 130.5,
		'Scholarship Dollars': 237751.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 22.38,
		'Scholarship Dollars': 61911
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 13575
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 55,
		'Scholarship Dollars': 122469.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 64.5,
		'Scholarship Dollars': 165680.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 432,
		'Scholarship FTE': 414.42,
		'Scholarship Dollars': 615331.39
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 108,
		'Scholarship FTE': 96.96,
		'Scholarship Dollars': 235721.29
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 23.5,
		'Scholarship Dollars': 57095.6
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 10.25,
		'Scholarship Dollars': 11690
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 155,
		'Scholarship FTE': 143.96,
		'Scholarship Dollars': 404390.25
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 24.5,
		'Scholarship Dollars': 38485
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 9.17,
		'Scholarship Dollars': 11436
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 550,
		'Federal School Code': 20690,
		'TAP College Name': 'NEW YORK SCHOOL INTERIOR DESIGN',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 156,
		'Scholarship FTE': 147.25,
		'Scholarship Dollars': 535143.2
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 14.25,
		'Scholarship Dollars': 48252.6
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 18.46,
		'Scholarship Dollars': 60333.91
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 164,
		'Scholarship FTE': 149,
		'Scholarship Dollars': 349173.49
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 13458
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.88,
		'Scholarship Dollars': 3691
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 115,
		'Scholarship FTE': 113.5,
		'Scholarship Dollars': 138130
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 41244
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 496,
		'Scholarship FTE': 482.25,
		'Scholarship Dollars': 565628.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 31.58,
		'Scholarship Dollars': 59867.1
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 36.33,
		'Scholarship Dollars': 83029.27
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 143,
		'Scholarship FTE': 135.5,
		'Scholarship Dollars': 195789
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 111,
		'Scholarship FTE': 84.25,
		'Scholarship Dollars': 256249.01
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 107,
		'Scholarship FTE': 98.71,
		'Scholarship Dollars': 120010.34
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 147,
		'Scholarship FTE': 92.04,
		'Scholarship Dollars': 559777.15
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 129,
		'Scholarship FTE': 99.46,
		'Scholarship Dollars': 147213.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 28850
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 115,
		'Scholarship FTE': 106.13,
		'Scholarship Dollars': 652515.81
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 22.79,
		'Scholarship Dollars': 70086.25
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 3697.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 55,
		'Federal School Code': 21068,
		'TAP College Name': 'BRAMSON ORT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 23580
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 13.5,
		'Scholarship Dollars': 23578.87
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 241,
		'Scholarship FTE': 232.83,
		'Scholarship Dollars': 489204.23
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 42.33,
		'Scholarship Dollars': 95678
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 189,
		'Scholarship FTE': 163.67,
		'Scholarship Dollars': 495552.54
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 86,
		'Scholarship FTE': 65.63,
		'Scholarship Dollars': 253054.32
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 16.5,
		'Scholarship Dollars': 76068
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 162,
		'Scholarship FTE': 149.42,
		'Scholarship Dollars': 335573.06
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 16.54,
		'Scholarship Dollars': 53306.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 2450
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 57,
		'Scholarship FTE': 53.75,
		'Scholarship Dollars': 245011.25
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 331,
		'Scholarship FTE': 301.17,
		'Scholarship Dollars': 723302.65
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 32.13,
		'Scholarship Dollars': 116439.22
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 88,
		'Scholarship FTE': 77.88,
		'Scholarship Dollars': 186417.13
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.54,
		'Scholarship Dollars': 5683.3
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 42.54,
		'Scholarship Dollars': 174365.88
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 39.75,
		'Scholarship Dollars': 357953.38
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 111,
		'Scholarship FTE': 106.33,
		'Scholarship Dollars': 167788.9
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 56437.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 833,
		'Scholarship FTE': 804.5,
		'Scholarship Dollars': 1181443.95
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 43.92,
		'Scholarship Dollars': 62710
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 64.83,
		'Scholarship Dollars': 221174.85
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8544,
		'Federal School Code': 0,
		'TAP College Name': 'PAUL MITCHELL THE SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8543,
		'Federal School Code': 21822,
		'TAP College Name': 'THE NEW SCHOOL OF RADIO & TELEVIS',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 698,
		'Scholarship FTE': 640.79,
		'Scholarship Dollars': 679363.25
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.33,
		'Scholarship Dollars': 13020.4
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8542,
		'Federal School Code': 0,
		'TAP College Name': 'COMPU21 CORP',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8541,
		'Federal School Code': 42238,
		'TAP College Name': 'ELECTRICAL TRAINING CENTER',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 37.63,
		'Scholarship Dollars': 45643
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8540,
		'Federal School Code': 42135,
		'TAP College Name': 'SHARP EDGEZ BARBER INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8539,
		'Federal School Code': 12293,
		'TAP College Name': 'VEEB NASSAU COUNTY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 111,
		'Scholarship FTE': 105,
		'Scholarship Dollars': 502006.99
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 83,
		'Scholarship FTE': 79.33,
		'Scholarship Dollars': 90834.14
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 15.38,
		'Scholarship Dollars': 51073.14
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8538,
		'Federal School Code': 14773,
		'TAP College Name': 'ULSTER BOCES CAREER & TECH CTR',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8537,
		'Federal School Code': 10052,
		'TAP College Name': 'JEFFERSON-LEWIS BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 13528
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 44.96,
		'Scholarship Dollars': 76414.85
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8536,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8535,
		'Federal School Code': 15204,
		'TAP College Name': 'WASH-SAR-WAR-HAM-ESS BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 88,
		'Scholarship FTE': 86.75,
		'Scholarship Dollars': 112855
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 47229.99
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8534,
		'Federal School Code': 0,
		'TAP College Name': 'SAM CONSULTING SERVICES, INC.',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8533,
		'Federal School Code': 7804,
		'TAP College Name': 'STAR CAREER ACADEMY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 23130
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 25.5,
		'Scholarship Dollars': 27278.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8532,
		'Federal School Code': 25754,
		'TAP College Name': 'INTERNATIONAL CULINARY CENTER',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 11790
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8531,
		'Federal School Code': 12557,
		'TAP College Name': 'ERIE 1 BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 6942.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 54786.49
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 45.38,
		'Scholarship Dollars': 72969.63
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 37135
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 9500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 120,
		'Scholarship FTE': 93.92,
		'Scholarship Dollars': 211812.21
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8530,
		'Federal School Code': 0,
		'TAP College Name': 'MONROE 1 BOCES ADULT EDUCATION',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0,
		'Scholarship Dollars': 1990
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8528,
		'Federal School Code': 35373,
		'TAP College Name': 'NEW YORK AUTOMOTIVE & DIESEL INST',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 38173.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 18.63,
		'Scholarship Dollars': 48420
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8527,
		'Federal School Code': 15546,
		'TAP College Name': 'ORLEANS/NIAGARA BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8526,
		'Federal School Code': 40433,
		'TAP College Name': 'ACE INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 844,
		'Federal School Code': 9248,
		'TAP College Name': 'SAMARITAN HOSPITAL NURSING',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 1965
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2051,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.54,
		'Scholarship Dollars': 9538.13
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8525,
		'Federal School Code': 39883,
		'TAP College Name': 'SAE INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 206.69
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8524,
		'Federal School Code': 41177,
		'TAP College Name': 'MONROE BOCES 2 CTR FOR WORKFORC',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11.88,
		'Scholarship Dollars': 81671.13
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8523,
		'Federal School Code': 15777,
		'TAP College Name': 'ERIE 2 CHAUTAUGUA-CATTARAUGUS BOC',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8522,
		'Federal School Code': 0,
		'TAP College Name': 'NEW YORK FILM ACADEMY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 8842.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 22457.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8521,
		'Federal School Code': 16723,
		'TAP College Name': 'MODERN WELDING SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 29475
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8518,
		'Federal School Code': 1255,
		'TAP College Name': 'LINCOLN TECHNICAL INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 8842.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 40.5,
		'Scholarship Dollars': 90232.9
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8514,
		'Federal School Code': 41443,
		'TAP College Name': 'INSTITUTE OF CULINARY EDUCATION',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8511,
		'Federal School Code': 7518,
		'TAP College Name': 'APEX TECHNICAL SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 16636.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 19.5,
		'Scholarship Dollars': 58432
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 13040
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8510,
		'Federal School Code': 37733,
		'TAP College Name': 'CNW SCHOOL OF MASSAGE THERAPY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 8842.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8509,
		'Federal School Code': 12652,
		'TAP College Name': 'ONONDAGA CORTLAND MADISON BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 13970
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8508,
		'Federal School Code': 31153,
		'TAP College Name': 'GENESEE VALLEY BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5130
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8506,
		'Federal School Code': 30962,
		'TAP College Name': 'CHARLES STUART SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2947.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 92,
		'Scholarship FTE': 89.5,
		'Scholarship Dollars': 256002.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 109,
		'Scholarship FTE': 107,
		'Scholarship Dollars': 123230
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.83,
		'Scholarship Dollars': 13020
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8505,
		'Federal School Code': 10147,
		'TAP College Name': 'WESTERN SUFFOLK BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8502,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 22454.65
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 24.5,
		'Scholarship Dollars': 82195
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 9.33,
		'Scholarship Dollars': 56239.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7952,
		'Federal School Code': 10813,
		'TAP College Name': 'AMERICAN ACADEMY MCALLISTER INST.',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 14240
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 23.75,
		'Scholarship Dollars': 58750.6
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7895,
		'Federal School Code': 7405,
		'TAP College Name': 'WOOD TOBE-COBURN SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7863,
		'Federal School Code': 21634,
		'TAP College Name': 'NEW YORK CAREER INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.58,
		'Scholarship Dollars': 21611.67
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 25.71,
		'Scholarship Dollars': 61018
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 139845
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7845,
		'Federal School Code': 4811,
		'TAP College Name': 'EVEREST INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 133,
		'Scholarship FTE': 120.5,
		'Scholarship Dollars': 391468.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 762,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE - WEEKEND',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 3930
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 32,
		'Scholarship Dollars': 58965.4
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7839,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 8842.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7833,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1690,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH HOSP SCHOOL RAD TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 47471.98
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7826,
		'Federal School Code': 17163,
		'TAP College Name': 'ART INSTITUTE OF NEW YORK CITY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.67,
		'Scholarship Dollars': 12685
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 102,
		'Scholarship FTE': 95.25,
		'Scholarship Dollars': 204941.26
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1674,
		'Federal School Code': 11617,
		'TAP College Name': 'NEW YORK  METHODIST HOSPITAL',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 450
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7738,
		'Federal School Code': 20937,
		'TAP College Name': 'LONG ISLAND BUSINESS INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5895
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1650,
		'Federal School Code': 5064,
		'TAP College Name': 'ST JAMES MERCY HOSP SCH XRAY TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 450
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 4023.84
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 8.75,
		'Scholarship Dollars': 35008.76
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 127,
		'Scholarship FTE': 120.5,
		'Scholarship Dollars': 234067.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 11,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 20.63,
		'Scholarship Dollars': 140706.38
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 34.5,
		'Scholarship Dollars': 68975
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 135,
		'Scholarship FTE': 132.5,
		'Scholarship Dollars': 185810
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 488,
		'Scholarship FTE': 473.5,
		'Scholarship Dollars': 502917.5
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 124,
		'Scholarship FTE': 121.25,
		'Scholarship Dollars': 142278.75
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 43.13,
		'Scholarship Dollars': 95338.07
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 1421,
		'Federal School Code': 42101,
		'TAP College Name': 'STELLA & CHARLES GUTTMAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2013,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9092.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5672,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 699.38
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 69.63,
		'Scholarship Dollars': 56636
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5645,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY  BARUCH COLL GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.71,
		'Scholarship Dollars': 24476.13
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 29948.66
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 85132.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 107,
		'Scholarship FTE': 90.42,
		'Scholarship Dollars': 168199.29
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 4.75,
		'Scholarship Dollars': 86756.59
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.38,
		'Scholarship Dollars': 7693.13
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 298,
		'Scholarship FTE': 260.04,
		'Scholarship Dollars': 273598.59
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 11190
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5605,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 1879
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 31.83,
		'Scholarship Dollars': 42631.59
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 30.42,
		'Scholarship Dollars': 39044.7
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5600,
		'Federal School Code': 38813,
		'TAP College Name': 'GRADUATE COLLEGE UNION UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 699.38
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5575,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY LAW',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 11190
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 155,
		'Scholarship FTE': 127.29,
		'Scholarship Dollars': 204143.69
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5565,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 11608.28
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5550,
		'Federal School Code': 2669,
		'TAP College Name': 'BANK ST COLL OF EDUC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 3496.88
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 72.88,
		'Scholarship Dollars': 97667.13
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 522,
		'Scholarship FTE': 464.88,
		'Scholarship Dollars': 400347.56
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5536,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MED CENTER GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1398.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 137,
		'Scholarship FTE': 109.71,
		'Scholarship Dollars': 109840.1
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 3216.3
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5515,
		'Federal School Code': 2783,
		'TAP College Name': 'NEW YORK LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 25177.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 292,
		'Scholarship FTE': 284,
		'Scholarship Dollars': 423553.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 151,
		'Scholarship FTE': 145.13,
		'Scholarship Dollars': 279696.68
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 523,
		'Scholarship FTE': 479.46,
		'Scholarship Dollars': 456851.92
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5480,
		'Federal School Code': 2677,
		'TAP College Name': 'BROOKLYN LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 15303.49
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5470,
		'Federal School Code': 2886,
		'TAP College Name': 'ALBANY LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 245,
		'Scholarship FTE': 207.25,
		'Scholarship Dollars': 202723.55
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5460,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1398.76
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5455,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595.01
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 40.38,
		'Scholarship Dollars': 35024.88
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 311,
		'Scholarship FTE': 275.58,
		'Scholarship Dollars': 341354.64
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 26919.1
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5435,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.88,
		'Scholarship Dollars': 4895.64
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 19.38,
		'Scholarship Dollars': 42879.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 7.38,
		'Scholarship Dollars': 37319.49
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5425,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 11190
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 222,
		'Scholarship FTE': 213.25,
		'Scholarship Dollars': 301574.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 95,
		'Scholarship FTE': 91,
		'Scholarship Dollars': 85980.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 105,
		'Scholarship FTE': 82.04,
		'Scholarship Dollars': 92110.14
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5420,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 699.38
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 6.58,
		'Scholarship Dollars': 139506.65
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 75,
		'Scholarship FTE': 54.54,
		'Scholarship Dollars': 81448.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5405,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 699.38
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 7.13,
		'Scholarship Dollars': 37934.09
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 653,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 1865
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 35.13,
		'Scholarship Dollars': 67203.05
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 20652.48
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5396,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE LAW SCHOOL',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 2760.34
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 59,
		'Scholarship FTE': 41.04,
		'Scholarship Dollars': 112065
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5395,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 14132.62
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.21,
		'Scholarship Dollars': 26056.56
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 184,
		'Scholarship FTE': 179.25,
		'Scholarship Dollars': 207960
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 51,
		'Scholarship Dollars': 48250
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 62,
		'Scholarship FTE': 59.5,
		'Scholarship Dollars': 244970.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 642,
		'Scholarship FTE': 545.58,
		'Scholarship Dollars': 558241.72
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 11.5,
		'Scholarship Dollars': 13850
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5345,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 16127.52
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 7.13,
		'Scholarship Dollars': 144472.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 23.5,
		'Scholarship Dollars': 36115.7
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5320,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.46,
		'Scholarship Dollars': 13763.7
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5315,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 63,
		'Scholarship FTE': 58.83,
		'Scholarship Dollars': 77669
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 24726
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 6.75,
		'Scholarship Dollars': 116709.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5305,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 11228.53
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 42,
		'Scholarship Dollars': 41500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 1624.6
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.08,
		'Scholarship Dollars': 39700.47
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 83,
		'Scholarship FTE': 77.5,
		'Scholarship Dollars': 87017.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 292,
		'Scholarship FTE': 276,
		'Scholarship Dollars': 278062.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 10750
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5265,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.88,
		'Scholarship Dollars': 15996.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5235,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 5678.03
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 5500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5216,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 7.25,
		'Scholarship Dollars': 33491.36
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5215,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.04,
		'Scholarship Dollars': 15514.34
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 76462
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 47.5,
		'Scholarship Dollars': 117369
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5210,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.08,
		'Scholarship Dollars': 18632.94
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5205,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 2.88,
		'Scholarship Dollars': 14356.84
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 117,
		'Scholarship FTE': 109.5,
		'Scholarship Dollars': 93750
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5200,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.38,
		'Scholarship Dollars': 2098.13
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5151,
		'Federal School Code': 9895,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 114,
		'Scholarship FTE': 111,
		'Scholarship Dollars': 94850
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 158,
		'Scholarship FTE': 152.5,
		'Scholarship Dollars': 413226.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 610,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 110,
		'Scholarship FTE': 102.96,
		'Scholarship Dollars': 105046.97
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 64.75,
		'Scholarship Dollars': 119708.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.13,
		'Scholarship Dollars': 63890
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5132,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 9791.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 7500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 11.67,
		'Scholarship Dollars': 79175.95
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5120,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 13987.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 605,
		'Federal School Code': 30277,
		'TAP College Name': 'PACIFIC COLLEGE OF ORIENTAL MED',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.33,
		'Scholarship Dollars': 6595.01
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 418,
		'Scholarship FTE': 411.5,
		'Scholarship Dollars': 363510
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 55735.38
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5110,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY - GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 4196.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 771,
		'Scholarship FTE': 728.46,
		'Scholarship Dollars': 887093.01
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5105,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 4083.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5100,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.13,
		'Scholarship Dollars': 11889.4
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 86,
		'Scholarship FTE': 84.5,
		'Scholarship Dollars': 63025
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 47.83,
		'Scholarship Dollars': 157396.09
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 3.58,
		'Scholarship Dollars': 20784.49
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5075,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 3730.19
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5070,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6993.76
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 103,
		'Scholarship FTE': 99,
		'Scholarship Dollars': 77100
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5065,
		'Federal School Code': 7109,
		'TAP College Name': 'SUC OLD WESTBURY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 7460.1
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 82894.27
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 64.75,
		'Scholarship Dollars': 155190.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 118,
		'Scholarship FTE': 115.83,
		'Scholarship Dollars': 125332.2
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5045,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.13,
		'Scholarship Dollars': 10091.45
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5040,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 25177.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 454,
		'Scholarship FTE': 440.25,
		'Scholarship Dollars': 576355.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.54,
		'Scholarship Dollars': 51952.08
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 62380
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 54,
		'Scholarship Dollars': 56365
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 55,
		'Federal School Code': 21068,
		'TAP College Name': 'BRAMSON ORT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 8892.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 73,
		'Scholarship FTE': 70,
		'Scholarship Dollars': 146965
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 62,
		'Scholarship FTE': 59,
		'Scholarship Dollars': 121117
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 18.5,
		'Scholarship Dollars': 60067
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 20.5,
		'Scholarship Dollars': 113630
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 14.38,
		'Scholarship Dollars': 91623.67
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5017,
		'Federal School Code': 12277,
		'TAP College Name': 'NEW YORK CHIROPRACTIC COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 61.25,
		'Scholarship Dollars': 195113.74
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5011,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 13987.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 25372.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 88,
		'Scholarship FTE': 82.25,
		'Scholarship Dollars': 104243.23
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 35.5,
		'Scholarship Dollars': 73955
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 36.5,
		'Scholarship Dollars': 66596.16
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1961.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 18.5,
		'Scholarship Dollars': 12000
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 17.63,
		'Scholarship Dollars': 35280
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 12.25,
		'Scholarship Dollars': 65998.9
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 134,
		'Scholarship FTE': 133,
		'Scholarship Dollars': 175810
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 509,
		'Scholarship FTE': 477,
		'Scholarship Dollars': 707051.07
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 30,
		'Scholarship Dollars': 262835.19
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 16,
		'Scholarship Dollars': 57759.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 82789.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 108,
		'Scholarship FTE': 103.08,
		'Scholarship Dollars': 181078.15
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 28,
		'Scholarship Dollars': 111934.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 26.5,
		'Scholarship Dollars': 50561
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 550,
		'Federal School Code': 20690,
		'TAP College Name': 'NEW YORK SCHOOL INTERIOR DESIGN',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 2000
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 153,
		'Scholarship FTE': 144.38,
		'Scholarship Dollars': 250346.78
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 8392.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 17880
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 143,
		'Scholarship FTE': 131.5,
		'Scholarship Dollars': 286102.56
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 8699
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 45586
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 16.13,
		'Scholarship Dollars': 20560.63
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 268,
		'Scholarship FTE': 258.08,
		'Scholarship Dollars': 560136.61
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 18,
		'Scholarship Dollars': 16621
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 181,
		'Scholarship FTE': 168.96,
		'Scholarship Dollars': 425023.83
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 10600
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 26.75,
		'Scholarship Dollars': 63411
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 157,
		'Scholarship FTE': 147.75,
		'Scholarship Dollars': 452044
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 20.75,
		'Scholarship Dollars': 21038
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 33100
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 116,
		'Scholarship FTE': 110.83,
		'Scholarship Dollars': 123188.63
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 164,
		'Scholarship FTE': 151.75,
		'Scholarship Dollars': 303336.92
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 15.08,
		'Scholarship Dollars': 12491
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11.25,
		'Scholarship Dollars': 41978.2
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8531,
		'Federal School Code': 12557,
		'TAP College Name': 'ERIE 1 BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 567,
		'Scholarship FTE': 538.5,
		'Scholarship Dollars': 594790.65
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 14.71,
		'Scholarship Dollars': 29173.69
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8529,
		'Federal School Code': 0,
		'TAP College Name': 'OUTREACH TRAINING INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8528,
		'Federal School Code': 35373,
		'TAP College Name': 'NEW YORK AUTOMOTIVE & DIESEL INST',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 18069
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8527,
		'Federal School Code': 15546,
		'TAP College Name': 'ORLEANS/NIAGARA BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 1398.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8526,
		'Federal School Code': 40433,
		'TAP College Name': 'ACE INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 116,
		'Scholarship FTE': 113.79,
		'Scholarship Dollars': 176860.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 49.17,
		'Scholarship Dollars': 114241.66
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 159,
		'Scholarship FTE': 151.38,
		'Scholarship Dollars': 205673.6
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.13,
		'Scholarship Dollars': 21351
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8525,
		'Federal School Code': 39883,
		'TAP College Name': 'SAE INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 11190
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8524,
		'Federal School Code': 41177,
		'TAP College Name': 'MONROE BOCES 2 CTR FOR WORKFORC',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 29.38,
		'Scholarship Dollars': 83259.7
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8523,
		'Federal School Code': 15777,
		'TAP College Name': 'ERIE 2 CHAUTAUGUA-CATTARAUGUS BOC',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8522,
		'Federal School Code': 0,
		'TAP College Name': 'NEW YORK FILM ACADEMY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 8392.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 146,
		'Scholarship FTE': 100.46,
		'Scholarship Dollars': 499403.05
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 33.63,
		'Scholarship Dollars': 81569.2
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8521,
		'Federal School Code': 16723,
		'TAP College Name': 'MODERN WELDING SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8519,
		'Federal School Code': 14648,
		'TAP College Name': 'CATTARAUGUS/ALLEGANY BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8518,
		'Federal School Code': 1255,
		'TAP College Name': 'LINCOLN TECHNICAL INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 27975
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8516,
		'Federal School Code': 15050,
		'TAP College Name': 'CHAMPLAIN VALLEY ED SVCS/CV-TEC',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4196.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 49.25,
		'Scholarship Dollars': 235188
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 137,
		'Scholarship FTE': 123.5,
		'Scholarship Dollars': 714221.82
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 120,
		'Scholarship FTE': 84.46,
		'Scholarship Dollars': 287864.6
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8515,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8514,
		'Federal School Code': 41443,
		'TAP College Name': 'INSTITUTE OF CULINARY EDUCATION',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 13987.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 121,
		'Scholarship FTE': 89.63,
		'Scholarship Dollars': 137655.02
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8513,
		'Federal School Code': 10641,
		'TAP College Name': 'SOUTHERN WESTCHESTER BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4068.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8512,
		'Federal School Code': 38094,
		'TAP College Name': 'MICROPOWER CAREER INSTITUTE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 183,
		'Scholarship FTE': 160.46,
		'Scholarship Dollars': 466595.76
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 38008
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8511,
		'Federal School Code': 7518,
		'TAP College Name': 'APEX TECHNICAL SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 2847.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8510,
		'Federal School Code': 37733,
		'TAP College Name': 'CNW SCHOOL OF MASSAGE THERAPY',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 25.71,
		'Scholarship Dollars': 83034
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8509,
		'Federal School Code': 12652,
		'TAP College Name': 'ONONDAGA CORTLAND MADISON BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8508,
		'Federal School Code': 31153,
		'TAP College Name': 'GENESEE VALLEY BOCES',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 6735
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 45,
		'Federal School Code': 6438,
		'TAP College Name': 'PHILLIPS BETH ISRAEL SCH.NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 125
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 91005
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 210,
		'Federal School Code': 6448,
		'TAP College Name': 'THE BELANGER SCHOOL OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.83,
		'Scholarship Dollars': 8783.44
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.75,
		'Scholarship Dollars': 40933.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 188,
		'Scholarship FTE': 170.38,
		'Scholarship Dollars': 354566.59
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8507,
		'Federal School Code': 41676,
		'TAP College Name': 'FINGER LAKES SCHOOL OF MASSAGE',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2647.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8506,
		'Federal School Code': 30962,
		'TAP College Name': 'CHARLES STUART SCHOOL',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 65.58,
		'Scholarship Dollars': 309481.07
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8504,
		'Federal School Code': 16195,
		'TAP College Name': 'INSTITUTE OF AUDIO RESEARCH',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8502,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 21201.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 358,
		'Scholarship FTE': 322.29,
		'Scholarship Dollars': 711510.44
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 17.17,
		'Scholarship Dollars': 98143.45
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 49246.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7895,
		'Federal School Code': 7405,
		'TAP College Name': 'WOOD TOBE-COBURN SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 18.63,
		'Scholarship Dollars': 45201.72
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7870,
		'Federal School Code': 9077,
		'TAP College Name': 'UTICA SCHOOL OF COMMERCE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7863,
		'Federal School Code': 21634,
		'TAP College Name': 'NEW YORK CAREER INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.17,
		'Scholarship Dollars': 31078.33
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 113,
		'Scholarship FTE': 104,
		'Scholarship Dollars': 398839.49
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 15575
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 15.5,
		'Scholarship Dollars': 61220
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7839,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 19.54,
		'Scholarship Dollars': 75778.1
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7837,
		'Federal School Code': 107329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2797.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7833,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 14237.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 801,
		'Scholarship FTE': 771.5,
		'Scholarship Dollars': 1165996.58
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 89,
		'Scholarship FTE': 83.92,
		'Scholarship Dollars': 149139.38
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 13.75,
		'Scholarship Dollars': 63550.74
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7826,
		'Federal School Code': 17163,
		'TAP College Name': 'ART INSTITUTE OF NEW YORK CITY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.33,
		'Scholarship Dollars': 34316.03
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 51.29,
		'Scholarship Dollars': 306012.44
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7738,
		'Federal School Code': 20937,
		'TAP College Name': 'LONG ISLAND BUSINESS INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 19480
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 8117.34
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 49.88,
		'Scholarship Dollars': 114316.62
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 437,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 776.79
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 670,
		'Scholarship FTE': 639.67,
		'Scholarship Dollars': 698937.24
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 45.88,
		'Scholarship Dollars': 329232.88
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.75,
		'Scholarship Dollars': 15863.6
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 7.13,
		'Scholarship Dollars': 20054.35
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 46.79,
		'Scholarship Dollars': 55910
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 41271.7
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8.75,
		'Scholarship Dollars': 36571
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 82,
		'Scholarship FTE': 74.42,
		'Scholarship Dollars': 94993.71
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 73,
		'Scholarship FTE': 61.17,
		'Scholarship Dollars': 185550.89
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7718,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 750
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7699,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE-2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 23.58,
		'Scholarship Dollars': 87806.64
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 2450
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 28.5,
		'Scholarship Dollars': 64585
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 88,
		'Scholarship FTE': 86.5,
		'Scholarship Dollars': 119879
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 35.5,
		'Scholarship Dollars': 41679.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7491,
		'Federal School Code': 11647,
		'TAP College Name': 'SANFORD BROWN INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 2109.94
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4.33,
		'Scholarship Dollars': 16720
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 18.5,
		'Scholarship Dollars': 74535.86
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7440,
		'Federal School Code': 12107,
		'TAP College Name': 'INST OF DESIGN & CONSTRUCTION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 13987.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7264,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE-PATCHOGUE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 18222
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 19.5,
		'Scholarship Dollars': 17000
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 32.92,
		'Scholarship Dollars': 74157.45
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 20814.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7260,
		'Federal School Code': 9043,
		'TAP College Name': 'ELMIRA BUSINESS INST',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 450
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 8547.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 14776.68
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 129,
		'Scholarship FTE': 128,
		'Scholarship Dollars': 163990
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6993.76
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 838,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING MED/DENTAL",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.58,
		'Scholarship Dollars': 7234.52
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 28.5,
		'Scholarship Dollars': 59869
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6830,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BBA ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2688
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 11005
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 134,
		'Scholarship FTE': 110.08,
		'Scholarship Dollars': 235609.48
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 25.33,
		'Scholarship Dollars': 77440.1
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 7460
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 38030.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 20.75,
		'Scholarship Dollars': 58327.8
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11.67,
		'Scholarship Dollars': 50384.59
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 9.75,
		'Scholarship Dollars': 64732.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2051,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 7460
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 15.5,
		'Scholarship Dollars': 15072.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA DAY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 98,
		'Scholarship FTE': 95.17,
		'Scholarship Dollars': 294283.94
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 52575
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 106482.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 11537.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9.25,
		'Scholarship Dollars': 13818.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 1950
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 32.17,
		'Scholarship Dollars': 121874.26
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 10,
		'Scholarship Dollars': 60968.78
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 127,
		'Scholarship FTE': 124,
		'Scholarship Dollars': 123195
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 35,
		'Scholarship Dollars': 105432
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 41.58,
		'Scholarship Dollars': 130674.92
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 20.75,
		'Scholarship Dollars': 57173.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 28370
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 113358.15
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 44.67,
		'Scholarship Dollars': 109211.29
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 929,
		'Scholarship FTE': 906,
		'Scholarship Dollars': 874675
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 158,
		'Scholarship FTE': 144.25,
		'Scholarship Dollars': 411417.43
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 10642.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 13454
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5965,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY-DOCTORAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 14406.25
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 16465.77
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 6.21,
		'Scholarship Dollars': 19664.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5915,
		'Federal School Code': 20754,
		'TAP College Name': 'KELLER GRAD SCHOOL OF MANAGEMENT',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6993.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5866,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 12588.75
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 108,
		'Scholarship FTE': 100.42,
		'Scholarship Dollars': 218776.36
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 67221
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS-GRAD',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5595
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 56990.85
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 22.08,
		'Scholarship Dollars': 29948
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5820,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIVERSITY UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 8392.51
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5805,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 8.21,
		'Scholarship Dollars': 42345.31
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 119,
		'Scholarship FTE': 115.13,
		'Scholarship Dollars': 129459.9
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 49.33,
		'Scholarship Dollars': 110272.51
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 22.29,
		'Scholarship Dollars': 48150
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4.04,
		'Scholarship Dollars': 98104.63
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 7.04,
		'Scholarship Dollars': 138951.31
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 12.96,
		'Scholarship Dollars': 28575.8
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5755,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.38,
		'Scholarship Dollars': 19525.63
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 5.21,
		'Scholarship Dollars': 117176.99
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 349,
		'Scholarship FTE': 335.75,
		'Scholarship Dollars': 582285.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1690,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH HOSP SCHOOL RAD TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 42547.5
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 11190
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1421,
		'Federal School Code': 42101,
		'TAP College Name': 'STELLA & CHARLES GUTTMAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY POLYTECHNIC INSTITUTE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 93703.62
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5685,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 8746.36
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 126,
		'Scholarship FTE': 120.08,
		'Scholarship Dollars': 225803.09
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 11,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 178883
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 43.5,
		'Scholarship Dollars': 73315
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 290,
		'Scholarship FTE': 274.5,
		'Scholarship Dollars': 254710
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 78,
		'Scholarship FTE': 77,
		'Scholarship Dollars': 62750
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 109,
		'Scholarship FTE': 101.63,
		'Scholarship Dollars': 97874.39
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 9267
	},
	{
		'Academic Year': 2012,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 4.75,
		'Scholarship Dollars': 23716.08
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 22.5,
		'Scholarship Dollars': 94625
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7895,
		'Federal School Code': 7405,
		'TAP College Name': 'WOOD TOBE-COBURN SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.04,
		'Scholarship Dollars': 49427.1
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 8501,
		'Federal School Code': 22878,
		'TAP College Name': 'NATIONAL TRACTOR TRAILER SCHOOL,',
		'TAP Sector Group': 'VOCATIONAL - VET SCHOOLS ONLY',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2647.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7977,
		'Federal School Code': 7401,
		'TAP College Name': 'MANDL SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1750
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7941,
		'Federal School Code': 20937,
		'TAP College Name': 'LONG ISLAND BUSINESS INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 9757.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7880,
		'Federal School Code': 22652,
		'TAP College Name': 'GLOBAL BUSINESS INSTITUTE',
		'TAP Sector Group': '7-BUS. NON-DEG',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7870,
		'Federal School Code': 9077,
		'TAP College Name': 'UTICA SCHOOL OF COMMERCE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 4102.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7863,
		'Federal School Code': 21634,
		'TAP College Name': 'NEW YORK CAREER INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 25401.76
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7845,
		'Federal School Code': 4811,
		'TAP College Name': 'EVEREST INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 1765
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7837,
		'Federal School Code': 107329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7833,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 8534.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7826,
		'Federal School Code': 17163,
		'TAP College Name': 'ART INSTITUTE OF NEW YORK CITY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7.67,
		'Scholarship Dollars': 22455.03
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 9142.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7.75,
		'Scholarship Dollars': 35045.9
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.75,
		'Scholarship Dollars': 15441.25
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 28434.9
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 24434.6
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7718,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 36.38,
		'Scholarship Dollars': 106264.39
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 450
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 17685.01
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 4000
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 7.92,
		'Scholarship Dollars': 31172.1
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 74,
		'Scholarship FTE': 49.67,
		'Scholarship Dollars': 172226.3
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 7060
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 12.96,
		'Scholarship Dollars': 60602.01
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 8.25,
		'Scholarship Dollars': 45535.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 700
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 16.5,
		'Scholarship Dollars': 28235
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6121,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 4YR BBA EVE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 13.33,
		'Scholarship Dollars': 43511.09
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 29.92,
		'Scholarship Dollars': 103618.58
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 33722.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 20.38,
		'Scholarship Dollars': 83992.63
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 24.5,
		'Scholarship Dollars': 87269.1
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 38.5,
		'Scholarship Dollars': 71131.56
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5915,
		'Federal School Code': 20754,
		'TAP College Name': 'KELLER GRAD SCHOOL OF MANAGEMENT',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 9041.25
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5866,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 10590
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 29245.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5820,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIVERSITY UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 17058.75
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5805,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 38654.05
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 44100.26
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 2.67,
		'Scholarship Dollars': 65322.59
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 9.25,
		'Scholarship Dollars': 148201.53
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 61471.6
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 57607.63
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 5.21,
		'Scholarship Dollars': 23851.63
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5660,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV  ARCHITECTURE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5655,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV ENGINEER GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2647.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 3.46,
		'Scholarship Dollars': 14908.52
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.04,
		'Scholarship Dollars': 60503.6
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.88,
		'Scholarship Dollars': 15148.13
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 15885
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5600,
		'Federal School Code': 38813,
		'TAP College Name': 'GRADUATE COLLEGE UNION UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 3530
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5590,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 667.53
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5585,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 661.88
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5565,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.92,
		'Scholarship Dollars': 7108.58
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5550,
		'Federal School Code': 2669,
		'TAP College Name': 'BANK ST COLL OF EDUC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 1765.09
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5533,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY SCHOOL OF LAW',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 5919.38
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.38,
		'Scholarship Dollars': 606.6
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5515,
		'Federal School Code': 2783,
		'TAP College Name': 'NEW YORK LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 18532.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5486,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV NURSING GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2647.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5480,
		'Federal School Code': 2677,
		'TAP College Name': 'BROOKLYN LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.88,
		'Scholarship Dollars': 15223.39
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5475,
		'Federal School Code': 2887,
		'TAP College Name': 'ALBANY MEDICAL COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5470,
		'Federal School Code': 2886,
		'TAP College Name': 'ALBANY LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5465,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV BUSIESS GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 15885
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5455,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4.63,
		'Scholarship Dollars': 36059.39
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9.71,
		'Scholarship Dollars': 45977.18
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5425,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 3530.18
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5420,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.38,
		'Scholarship Dollars': 22753.14
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 34316.09
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 18184.36
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5396,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE LAW SCHOOL',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 5274.52
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 6.96,
		'Scholarship Dollars': 34828.4
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5355,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 12840
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5345,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 17437.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 12,
		'Scholarship Dollars': 241332.77
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5320,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.21,
		'Scholarship Dollars': 27440.63
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.96,
		'Scholarship Dollars': 62524.79
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5305,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6581.26
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.08,
		'Scholarship Dollars': 29795.55
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5268,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5265,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5235,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.38,
		'Scholarship Dollars': 14859.75
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5220,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY- GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2647.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5216,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 11.13,
		'Scholarship Dollars': 51490.61
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5210,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.13,
		'Scholarship Dollars': 18820.15
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5205,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 14411.26
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5200,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.88,
		'Scholarship Dollars': 4595.64
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5151,
		'Federal School Code': 9895,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 48812.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5133,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 7942.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5132,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6543.75
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5120,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.79,
		'Scholarship Dollars': 19839.54
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.75,
		'Scholarship Dollars': 25639.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5110,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY - GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 10590
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5100,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 10590.01
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5075,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.38,
		'Scholarship Dollars': 7280.63
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5070,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6618.76
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5050,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 3971.26
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5045,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 2.88,
		'Scholarship Dollars': 14374.64
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5040,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1248.75
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5035,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV.-JOHNSON GRAD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 10590
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.38,
		'Scholarship Dollars': 19764.71
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5025,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV ARTS GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.63,
		'Scholarship Dollars': 71857.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5017,
		'Federal School Code': 12277,
		'TAP College Name': 'NEW YORK CHIROPRACTIC COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5011,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 15885
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.17,
		'Scholarship Dollars': 14752.17
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 16.5,
		'Scholarship Dollars': 61411.15
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 3026,
		'Federal School Code': 2858,
		'TAP College Name': 'LICH TEACHOUT SUNY FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 14.5,
		'Scholarship Dollars': 98993.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 18365
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 82263.8
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 30.5,
		'Scholarship Dollars': 41171
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2497.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.92,
		'Scholarship Dollars': 7853.93
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1000
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 15300
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 25.17,
		'Scholarship Dollars': 84495.8
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 14.5,
		'Scholarship Dollars': 19634
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 23317
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 14.42,
		'Scholarship Dollars': 41532.12
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 13.5,
		'Scholarship Dollars': 23760
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.79,
		'Scholarship Dollars': 6362
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 47,
		'Scholarship FTE': 33.54,
		'Scholarship Dollars': 90429
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 31.71,
		'Scholarship Dollars': 66033.81
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 3000
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 130,
		'Scholarship FTE': 98.92,
		'Scholarship Dollars': 304651.76
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 118,
		'Scholarship FTE': 86.58,
		'Scholarship Dollars': 146864.56
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 46205
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 85,
		'Scholarship FTE': 62.21,
		'Scholarship Dollars': 282238.43
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 13.46,
		'Scholarship Dollars': 78673.57
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 24.42,
		'Scholarship Dollars': 73549.13
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 25.04,
		'Scholarship Dollars': 57877.2
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 101,
		'Scholarship FTE': 87.79,
		'Scholarship Dollars': 178630.05
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 63,
		'Scholarship FTE': 51.42,
		'Scholarship Dollars': 305399.13
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 57.75,
		'Scholarship Dollars': 103448
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 73,
		'Scholarship FTE': 60.92,
		'Scholarship Dollars': 211409.25
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 10590
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 39,
		'Scholarship FTE': 31.29,
		'Scholarship Dollars': 50901.2
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 14.5,
		'Scholarship Dollars': 28335
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 35.5,
		'Scholarship Dollars': 49724.2
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.88,
		'Scholarship Dollars': 7883.13
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 141,
		'Scholarship FTE': 108.67,
		'Scholarship Dollars': 242400.75
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 20.46,
		'Scholarship Dollars': 47269.9
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2051,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 3530
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12,
		'Scholarship Dollars': 83270
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 5700
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 37.96,
		'Scholarship Dollars': 105041.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 30787.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 88039
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 5300
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.75,
		'Scholarship Dollars': 14235
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 55530
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 22.88,
		'Scholarship Dollars': 46581.6
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 22.38,
		'Scholarship Dollars': 45369
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 24.67,
		'Scholarship Dollars': 48829.9
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1610,
		'Federal School Code': 11614,
		'TAP College Name': 'CHAMPLAIN VLY SCHL OF RADIOLOGY',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1550,
		'Federal School Code': 21601,
		'TAP College Name': 'GENEVA GENERAL HOSPITAL',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 150
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 53.25,
		'Scholarship Dollars': 350134.01
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 1700
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 7332
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 94,
		'Scholarship FTE': 77.38,
		'Scholarship Dollars': 63683.4
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 120,
		'Scholarship FTE': 98.63,
		'Scholarship Dollars': 263148.08
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 314,
		'Scholarship FTE': 274.21,
		'Scholarship Dollars': 290932.38
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 17.46,
		'Scholarship Dollars': 66825.24
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 27.67,
		'Scholarship Dollars': 26820
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 198,
		'Scholarship FTE': 165.63,
		'Scholarship Dollars': 335605.85
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 536,
		'Scholarship FTE': 479.79,
		'Scholarship Dollars': 430429.7
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 147,
		'Scholarship FTE': 127.33,
		'Scholarship Dollars': 126158.29
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 517,
		'Scholarship FTE': 465.5,
		'Scholarship Dollars': 412042.46
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 262,
		'Scholarship FTE': 211.71,
		'Scholarship Dollars': 208758.65
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 9.04,
		'Scholarship Dollars': 13111
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 357,
		'Scholarship FTE': 318.92,
		'Scholarship Dollars': 390870.36
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 31.54,
		'Scholarship Dollars': 78337.49
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 111,
		'Scholarship FTE': 91.71,
		'Scholarship Dollars': 97664.98
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 51.71,
		'Scholarship Dollars': 86853.4
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 66,
		'Scholarship FTE': 47.5,
		'Scholarship Dollars': 121577.4
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 63,
		'Scholarship FTE': 44.17,
		'Scholarship Dollars': 110968.75
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 21,
		'Scholarship Dollars': 38880
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 47601
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 13.75,
		'Scholarship Dollars': 18091.03
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 27.71,
		'Scholarship Dollars': 31170.1
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 24777.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 64.5,
		'Scholarship Dollars': 66125
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1075,
		'Federal School Code': 7465,
		'TAP College Name': 'AMERICAN ACAD OF DRAMATIC ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 28,
		'Scholarship Dollars': 17250
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 6000
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 55,
		'Scholarship Dollars': 136852
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 21,
		'Scholarship Dollars': 121413
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 118,
		'Scholarship FTE': 109,
		'Scholarship Dollars': 94875
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 66.25,
		'Scholarship Dollars': 104861.25
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 14.5,
		'Scholarship Dollars': 11000
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 466,
		'Scholarship FTE': 456,
		'Scholarship Dollars': 392355
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 784,
		'Scholarship FTE': 739.42,
		'Scholarship Dollars': 782177.63
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 5.42,
		'Scholarship Dollars': 29476.94
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 131,
		'Scholarship FTE': 129,
		'Scholarship Dollars': 100450
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 131,
		'Scholarship FTE': 125.67,
		'Scholarship Dollars': 141800.96
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 33.33,
		'Scholarship Dollars': 51476.41
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9953.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 486,
		'Scholarship FTE': 474.17,
		'Scholarship Dollars': 604281.25
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 29.75,
		'Scholarship Dollars': 94735.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 63.08,
		'Scholarship Dollars': 229907.63
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 36.5,
		'Scholarship Dollars': 85609
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 13.04,
		'Scholarship Dollars': 116610.01
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 18,
		'Scholarship Dollars': 13700
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 260031.25
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 101,
		'Scholarship FTE': 96.5,
		'Scholarship Dollars': 170846
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 181,
		'Scholarship FTE': 169.38,
		'Scholarship Dollars': 318974.11
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5105,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.92,
		'Scholarship Dollars': 3818.26
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 152,
		'Scholarship FTE': 141.88,
		'Scholarship Dollars': 302102.51
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 212,
		'Scholarship FTE': 196.38,
		'Scholarship Dollars': 445391.95
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 12.25,
		'Scholarship Dollars': 58029.03
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 193,
		'Scholarship FTE': 183,
		'Scholarship Dollars': 422768.85
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 167,
		'Scholarship FTE': 153.5,
		'Scholarship Dollars': 313917.2
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 590,
		'Scholarship FTE': 567.75,
		'Scholarship Dollars': 636632.85
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 175,
		'Scholarship FTE': 164.46,
		'Scholarship Dollars': 254811.26
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 140,
		'Scholarship FTE': 91.25,
		'Scholarship Dollars': 408302.6
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 158,
		'Scholarship FTE': 147,
		'Scholarship Dollars': 570172.85
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5215,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 10838.31
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 192,
		'Scholarship FTE': 163.96,
		'Scholarship Dollars': 424576.35
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 238,
		'Scholarship FTE': 217.88,
		'Scholarship Dollars': 439918.79
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 381,
		'Scholarship FTE': 352.42,
		'Scholarship Dollars': 749192.92
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.46,
		'Scholarship Dollars': 15775.7
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5240,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV  INTL AFFAIRS GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 15885
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 836,
		'Scholarship FTE': 802.92,
		'Scholarship Dollars': 1005961.17
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 726,
		'Scholarship FTE': 696.79,
		'Scholarship Dollars': 811051.99
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 91,
		'Scholarship FTE': 84.75,
		'Scholarship Dollars': 163070.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 107,
		'Scholarship FTE': 106,
		'Scholarship Dollars': 138947.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1248.75
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 15.5,
		'Scholarship Dollars': 15750
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 840,
		'Federal School Code': 9248,
		'TAP College Name': 'SAMARITAN HOSP NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.92,
		'Scholarship Dollars': 4588.43
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 94801
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 22.5,
		'Scholarship Dollars': 67380
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 157,
		'Scholarship FTE': 152,
		'Scholarship Dollars': 154135
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 2250
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 762,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE - WEEKEND',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 2271.16
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 108,
		'Scholarship FTE': 105,
		'Scholarship Dollars': 191590
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5395,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.25,
		'Scholarship Dollars': 18439.06
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 6.04,
		'Scholarship Dollars': 90330.73
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 41.75,
		'Scholarship Dollars': 88006.07
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 422,
		'Scholarship FTE': 407.5,
		'Scholarship Dollars': 647504.25
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 128,
		'Scholarship FTE': 120.88,
		'Scholarship Dollars': 122628.13
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 35,
		'Scholarship Dollars': 123660
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5435,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.38,
		'Scholarship Dollars': 1948.14
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 75.5,
		'Scholarship Dollars': 100579.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 184,
		'Scholarship FTE': 175.58,
		'Scholarship Dollars': 307166.9
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 41.42,
		'Scholarship Dollars': 34453.93
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 86,
		'Scholarship FTE': 79.58,
		'Scholarship Dollars': 82506.61
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 644,
		'Scholarship FTE': 561.79,
		'Scholarship Dollars': 546082.51
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 641,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 333.34
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 69,
		'Scholarship FTE': 65.5,
		'Scholarship Dollars': 74532.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 336,
		'Scholarship FTE': 315.63,
		'Scholarship Dollars': 310152.38
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5510,
		'Federal School Code': 4762,
		'TAP College Name': 'WEILL MEDICAL COLLEGE OF CORNELL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 26.75,
		'Scholarship Dollars': 30515
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 610,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 102,
		'Scholarship FTE': 97,
		'Scholarship Dollars': 120932.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 605,
		'Federal School Code': 30277,
		'TAP College Name': 'PACIFIC COLLEGE OF ORIENTAL MED',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.67,
		'Scholarship Dollars': 4530.01
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 57,
		'Scholarship FTE': 51.5,
		'Scholarship Dollars': 149395.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5536,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MED CENTER GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5575,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY LAW',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 91,
		'Scholarship FTE': 84,
		'Scholarship Dollars': 163876.25
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 17.21,
		'Scholarship Dollars': 54606.1
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 102,
		'Scholarship FTE': 95,
		'Scholarship Dollars': 106562.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 632,
		'Scholarship FTE': 594.08,
		'Scholarship Dollars': 788210.28
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 550,
		'Federal School Code': 20690,
		'TAP College Name': 'NEW YORK SCHOOL INTERIOR DESIGN',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 21415
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 155,
		'Scholarship FTE': 149.13,
		'Scholarship Dollars': 164452.88
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 46.13,
		'Scholarship Dollars': 90220.88
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5645,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY  BARUCH COLL GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.08,
		'Scholarship Dollars': 20847.99
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 57,
		'Scholarship FTE': 54,
		'Scholarship Dollars': 248673.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 14,
		'Scholarship Dollars': 34632.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 137,
		'Scholarship FTE': 126.5,
		'Scholarship Dollars': 399890
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 437,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5283.9
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 28.5,
		'Scholarship Dollars': 90347.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 1500
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 114,
		'Scholarship FTE': 107,
		'Scholarship Dollars': 270487.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 180,
		'Scholarship FTE': 167.67,
		'Scholarship Dollars': 598045.68
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5685,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2647.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5755,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.88,
		'Scholarship Dollars': 9486.62
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 128,
		'Scholarship FTE': 122.92,
		'Scholarship Dollars': 141935.43
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 500
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 46.21,
		'Scholarship Dollars': 68092.13
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 2500
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 22455
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 260,
		'Scholarship FTE': 251.75,
		'Scholarship Dollars': 372225
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 63,
		'Scholarship Dollars': 284482
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 99,
		'Scholarship FTE': 93,
		'Scholarship Dollars': 90691.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 169,
		'Scholarship FTE': 161.5,
		'Scholarship Dollars': 414135
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 28.88,
		'Scholarship Dollars': 64375.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 99,
		'Scholarship FTE': 98.5,
		'Scholarship Dollars': 87445
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 57,
		'Scholarship FTE': 55.5,
		'Scholarship Dollars': 95151.8
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 135,
		'Scholarship FTE': 134,
		'Scholarship Dollars': 155590
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 288,
		'Scholarship FTE': 274.75,
		'Scholarship Dollars': 597105.92
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 33482.5
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 103,
		'Scholarship FTE': 101.5,
		'Scholarship Dollars': 144335
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 210,
		'Federal School Code': 6448,
		'TAP College Name': 'THE BELANGER SCHOOL OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6043
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 48.25,
		'Scholarship Dollars': 95281.35
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 5920
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 769,
		'Scholarship FTE': 652,
		'Scholarship Dollars': 627465
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 554,
		'Scholarship FTE': 442,
		'Scholarship Dollars': 391950
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 10815
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 25.08,
		'Scholarship Dollars': 131967.58
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 56,
		'Scholarship Dollars': 51500
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7264,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE-PATCHOGUE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 17311
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 168,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV SCH ENGINEERING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 89,
		'Scholarship FTE': 87,
		'Scholarship Dollars': 85545
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 166,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV NURSING PROG',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 250
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 137,
		'Scholarship FTE': 134,
		'Scholarship Dollars': 114750
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 150,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 206,
		'Scholarship FTE': 198.5,
		'Scholarship Dollars': 211825
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 7690,
		'Federal School Code': 9003,
		'TAP College Name': 'OLEAN BUSINESS INST',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 5295
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 91,
		'Scholarship FTE': 86.25,
		'Scholarship Dollars': 141331
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 20.46,
		'Scholarship Dollars': 42318.21
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 33,
		'Scholarship Dollars': 140505
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 129,
		'Scholarship FTE': 125.5,
		'Scholarship Dollars': 155805
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 288,
		'Scholarship FTE': 274.5,
		'Scholarship Dollars': 230865
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 226,
		'Scholarship FTE': 219.38,
		'Scholarship Dollars': 237486.88
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 55,
		'Federal School Code': 21068,
		'TAP College Name': 'BRAMSON ORT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 17460
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 45,
		'Federal School Code': 6438,
		'TAP College Name': 'PHILLIPS BETH ISRAEL SCH.NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 1750
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 41,
		'Scholarship Dollars': 44512
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 49.5,
		'Scholarship Dollars': 61123
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 11,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 29,
		'Scholarship Dollars': 166470
	},
	{
		'Academic Year': 2011,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 132,
		'Scholarship FTE': 124,
		'Scholarship Dollars': 265460.49
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 35.17,
		'Scholarship Dollars': 75999.02
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 19634.82
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 140,
		'Scholarship FTE': 107.92,
		'Scholarship Dollars': 300467.63
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 161,
		'Scholarship FTE': 119.96,
		'Scholarship Dollars': 216603.71
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 39464.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 16.33,
		'Scholarship Dollars': 73405.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 474
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 50.17,
		'Scholarship Dollars': 193776.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 19.42,
		'Scholarship Dollars': 79503.51
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 21.79,
		'Scholarship Dollars': 44582.76
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 474
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 29.33,
		'Scholarship Dollars': 102671.47
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 95,
		'Scholarship FTE': 88.75,
		'Scholarship Dollars': 129309.52
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 73,
		'Scholarship FTE': 57.04,
		'Scholarship Dollars': 232535.91
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 46.5,
		'Scholarship Dollars': 323391.7
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 77,
		'Scholarship FTE': 65.67,
		'Scholarship Dollars': 138090.43
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 59,
		'Scholarship FTE': 53.67,
		'Scholarship Dollars': 192400.71
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2.08,
		'Scholarship Dollars': 10166.19
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 43.42,
		'Scholarship Dollars': 69763.52
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 10154.15
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 46.58,
		'Scholarship Dollars': 50146.34
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.38,
		'Scholarship Dollars': 10354.43
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 94925.88
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 167,
		'Scholarship FTE': 128.33,
		'Scholarship Dollars': 246440.76
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 21.21,
		'Scholarship Dollars': 40160.74
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 84320.42
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 16002.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 30.92,
		'Scholarship Dollars': 71315.7
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.25,
		'Scholarship Dollars': 18750.05
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 9088.24
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 12.96,
		'Scholarship Dollars': 33552.36
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 26030
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 17.75,
		'Scholarship Dollars': 20287.42
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 14.38,
		'Scholarship Dollars': 29702.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 32.25,
		'Scholarship Dollars': 48818.52
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1690,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH HOSP SCHOOL RAD TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 474
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1675,
		'Federal School Code': 12045,
		'TAP College Name': 'CENTRAL SUFFOLK SCH RAD TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 6860
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1653,
		'Federal School Code': 5066,
		'TAP College Name': 'FAXSTON ST LUKES SCHOOL RAD TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 899
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1650,
		'Federal School Code': 5064,
		'TAP College Name': 'ST JAMES MERCY HOSP SCH XRAY TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1454
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1620,
		'Federal School Code': 6435,
		'TAP College Name': 'ARNOT OGDEN MEDICAL CENTER',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 425
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1610,
		'Federal School Code': 11614,
		'TAP College Name': 'CHAMPLAIN VLY SCHL OF RADIOLOGY',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 474
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.13,
		'Scholarship Dollars': 11154.76
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 78,
		'Scholarship FTE': 67.54,
		'Scholarship Dollars': 57364.44
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 118,
		'Scholarship FTE': 96.54,
		'Scholarship Dollars': 247856.94
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 328,
		'Scholarship FTE': 281.75,
		'Scholarship Dollars': 291453.84
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 26.88,
		'Scholarship Dollars': 22181
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 202,
		'Scholarship FTE': 165.83,
		'Scholarship Dollars': 226259.13
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 507,
		'Scholarship FTE': 455.75,
		'Scholarship Dollars': 395405.18
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 163,
		'Scholarship FTE': 142.17,
		'Scholarship Dollars': 143383.58
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 522,
		'Scholarship FTE': 462.5,
		'Scholarship Dollars': 421814.99
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 291,
		'Scholarship FTE': 243.04,
		'Scholarship Dollars': 249114.61
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 375,
		'Scholarship FTE': 331.42,
		'Scholarship Dollars': 374422.65
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 41,
		'Scholarship FTE': 29.96,
		'Scholarship Dollars': 68853.93
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 102,
		'Scholarship FTE': 74.04,
		'Scholarship Dollars': 85209.7
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 51.58,
		'Scholarship Dollars': 107964.88
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 64,
		'Scholarship FTE': 44.5,
		'Scholarship Dollars': 106322.03
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 48.33,
		'Scholarship Dollars': 114010.19
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 12.75,
		'Scholarship Dollars': 19749
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 21.79,
		'Scholarship Dollars': 26643.66
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 25741.95
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 73.25,
		'Scholarship Dollars': 77590
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1075,
		'Federal School Code': 7465,
		'TAP College Name': 'AMERICAN ACAD OF DRAMATIC ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 5304.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 35.25,
		'Scholarship Dollars': 29286.32
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 4266
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 52.5,
		'Scholarship Dollars': 135991.53
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 136,
		'Scholarship FTE': 130,
		'Scholarship Dollars': 100254
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 73.25,
		'Scholarship Dollars': 73394.97
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 15.5,
		'Scholarship Dollars': 12051
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 504,
		'Scholarship FTE': 495,
		'Scholarship Dollars': 396889.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 877,
		'Scholarship FTE': 826.42,
		'Scholarship Dollars': 858845.9
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 8.79,
		'Scholarship Dollars': 22751.25
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 141,
		'Scholarship FTE': 137.5,
		'Scholarship Dollars': 102686.25
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 122,
		'Scholarship FTE': 119.17,
		'Scholarship Dollars': 121955.9
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 506,
		'Scholarship FTE': 483,
		'Scholarship Dollars': 553732.04
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 28,
		'Scholarship Dollars': 54601.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 70,
		'Scholarship FTE': 66.75,
		'Scholarship Dollars': 204771.75
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 31.25,
		'Scholarship Dollars': 51611.69
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 29.5,
		'Scholarship Dollars': 20872
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 199555.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 99,
		'Scholarship FTE': 92.5,
		'Scholarship Dollars': 95336
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 198,
		'Scholarship FTE': 183.88,
		'Scholarship Dollars': 354412.25
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 165,
		'Scholarship FTE': 147.88,
		'Scholarship Dollars': 222888.13
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 228,
		'Scholarship FTE': 208.79,
		'Scholarship Dollars': 445066.63
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 190,
		'Scholarship FTE': 178.17,
		'Scholarship Dollars': 304830.24
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 179,
		'Scholarship FTE': 168.75,
		'Scholarship Dollars': 321837.08
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 636,
		'Scholarship FTE': 609,
		'Scholarship Dollars': 586923.83
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 185,
		'Scholarship FTE': 173,
		'Scholarship Dollars': 255012.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 140,
		'Scholarship FTE': 92.87,
		'Scholarship Dollars': 409711.21
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 181,
		'Scholarship FTE': 169,
		'Scholarship Dollars': 573567.79
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 180,
		'Scholarship FTE': 161.63,
		'Scholarship Dollars': 346436.3
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 277,
		'Scholarship FTE': 256.29,
		'Scholarship Dollars': 477408.76
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 409,
		'Scholarship FTE': 378.54,
		'Scholarship Dollars': 813478.64
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 16581.3
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 803,
		'Scholarship FTE': 775.54,
		'Scholarship Dollars': 932444.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 742,
		'Scholarship FTE': 707.08,
		'Scholarship Dollars': 806640.35
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 90,
		'Scholarship FTE': 82,
		'Scholarship Dollars': 157995.97
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 107,
		'Scholarship FTE': 106,
		'Scholarship Dollars': 137089.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 35127.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 844,
		'Federal School Code': 9248,
		'TAP College Name': 'SAMARITAN HOSPITAL NURSING',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 1631.7
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 840,
		'Federal School Code': 9248,
		'TAP College Name': 'SAMARITAN HOSP NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 4308.33
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 836,
		'Federal School Code': 9479,
		'TAP College Name': "ST PAUL'S SCH NURSING SI",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 58288.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 24,
		'Scholarship Dollars': 69110.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 161,
		'Scholarship FTE': 156,
		'Scholarship Dollars': 153662.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 3922
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 762,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE - WEEKEND',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 3247.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 109,
		'Scholarship FTE': 105,
		'Scholarship Dollars': 220008.55
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 45.25,
		'Scholarship Dollars': 83697.35
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 486,
		'Scholarship FTE': 473.25,
		'Scholarship Dollars': 697166.65
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 745,
		'Federal School Code': 6443,
		'TAP College Name': "ST JOHN'S RIVERSIDE HOSPITAL",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 245
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 155,
		'Scholarship FTE': 150.5,
		'Scholarship Dollars': 132735.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 32,
		'Scholarship Dollars': 70043.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 1573
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 80,
		'Scholarship FTE': 76.75,
		'Scholarship Dollars': 94061.44
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 188,
		'Scholarship FTE': 181.25,
		'Scholarship Dollars': 304904.57
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 38.75,
		'Scholarship Dollars': 36582.37
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 84,
		'Scholarship FTE': 78.5,
		'Scholarship Dollars': 90041.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 650,
		'Scholarship FTE': 559.12,
		'Scholarship Dollars': 527072.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 641,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 473.99
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 75,
		'Scholarship FTE': 70,
		'Scholarship Dollars': 71234.17
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 393,
		'Scholarship FTE': 373,
		'Scholarship Dollars': 332628.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 33,
		'Scholarship FTE': 32.5,
		'Scholarship Dollars': 24144
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 610,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 110,
		'Scholarship FTE': 103.79,
		'Scholarship Dollars': 96383.29
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 605,
		'Federal School Code': 30277,
		'TAP College Name': 'PACIFIC COLLEGE OF ORIENTAL MED',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 473.99
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 54.33,
		'Scholarship Dollars': 176368.61
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 104,
		'Scholarship FTE': 93.5,
		'Scholarship Dollars': 152654.94
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 13.08,
		'Scholarship Dollars': 27239.48
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 114,
		'Scholarship FTE': 108.25,
		'Scholarship Dollars': 103064.7
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 715,
		'Scholarship FTE': 668.17,
		'Scholarship Dollars': 818352.82
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 550,
		'Federal School Code': 20690,
		'TAP College Name': 'NEW YORK SCHOOL INTERIOR DESIGN',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1928
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 27.75,
		'Scholarship Dollars': 65027.77
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 153,
		'Scholarship FTE': 146.5,
		'Scholarship Dollars': 142413.75
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 35.83,
		'Scholarship Dollars': 44158.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 49.25,
		'Scholarship Dollars': 158350.11
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 9935
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 142,
		'Scholarship FTE': 133.75,
		'Scholarship Dollars': 403491.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 437,
		'Federal School Code': 12364,
		'TAP College Name': "ST PAUL'S SCH NURSING",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 28,
		'Scholarship Dollars': 86937.95
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 2370
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 131,
		'Scholarship FTE': 128,
		'Scholarship Dollars': 278393.71
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 190,
		'Scholarship FTE': 176,
		'Scholarship Dollars': 569171.62
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 143,
		'Scholarship FTE': 136,
		'Scholarship Dollars': 133682.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 474
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 39.88,
		'Scholarship Dollars': 61130.68
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 2672
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 289,
		'Scholarship FTE': 280.25,
		'Scholarship Dollars': 344692.72
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 72,
		'Scholarship Dollars': 201081.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 113,
		'Scholarship FTE': 107.5,
		'Scholarship Dollars': 113012.75
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 169,
		'Scholarship FTE': 158.5,
		'Scholarship Dollars': 304912.76
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 104,
		'Scholarship FTE': 101,
		'Scholarship Dollars': 89886.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 287,
		'Federal School Code': 10153,
		'TAP College Name': 'HELENE FULD SCHOOL REG NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 5058.43
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 54.5,
		'Scholarship Dollars': 74924
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 129,
		'Scholarship FTE': 128,
		'Scholarship Dollars': 142071.49
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 319,
		'Scholarship FTE': 307.5,
		'Scholarship Dollars': 529933.29
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 116,
		'Scholarship FTE': 114.5,
		'Scholarship Dollars': 171075.45
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 52,
		'Scholarship Dollars': 77836.89
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 4400.55
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 967,
		'Scholarship FTE': 769.75,
		'Scholarship Dollars': 675340.05
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 598,
		'Scholarship FTE': 411,
		'Scholarship Dollars': 339161.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 17.75,
		'Scholarship Dollars': 88881.63
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 52,
		'Scholarship Dollars': 48536
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 168,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV SCH ENGINEERING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 85,
		'Scholarship FTE': 84,
		'Scholarship Dollars': 79686
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 160,
		'Scholarship FTE': 154.75,
		'Scholarship Dollars': 124527.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 150,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 230,
		'Scholarship FTE': 226,
		'Scholarship Dollars': 224780.75
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 112,
		'Scholarship FTE': 103.5,
		'Scholarship Dollars': 176997.49
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 28.71,
		'Scholarship Dollars': 46476.87
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 39.5,
		'Scholarship Dollars': 193225.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 124,
		'Scholarship FTE': 121,
		'Scholarship Dollars': 133138.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 296,
		'Scholarship FTE': 282,
		'Scholarship Dollars': 231139.6
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 235,
		'Scholarship FTE': 226.5,
		'Scholarship Dollars': 204819.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 55,
		'Federal School Code': 21068,
		'TAP College Name': 'BRAMSON ORT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.75,
		'Scholarship Dollars': 19112.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 45,
		'Federal School Code': 6438,
		'TAP College Name': 'PHILLIPS BETH ISRAEL SCH.NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.96,
		'Scholarship Dollars': 4675.22
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 42.5,
		'Scholarship Dollars': 36017
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 57,
		'Scholarship FTE': 52.5,
		'Scholarship Dollars': 70013.3
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 11,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 27,
		'Scholarship Dollars': 138138.69
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 133,
		'Scholarship FTE': 125.5,
		'Scholarship Dollars': 192162.56
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7952,
		'Federal School Code': 10813,
		'TAP College Name': 'AMERICAN ACADEMY MCALLISTER INST.',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 245
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7941,
		'Federal School Code': 20937,
		'TAP College Name': 'LONG ISLAND BUSINESS INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 12341.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7936,
		'Federal School Code': 25408,
		'TAP College Name': '878 EDUCATION, LLC',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1454
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7895,
		'Federal School Code': 7405,
		'TAP College Name': 'WOOD TOBE-COBURN SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 735
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7880,
		'Federal School Code': 22652,
		'TAP College Name': 'GLOBAL BUSINESS INSTITUTE',
		'TAP Sector Group': '7-BUS. NON-DEG',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 474
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7874,
		'Federal School Code': 23065,
		'TAP College Name': 'PROFESSIONAL BUSINESS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 474
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7870,
		'Federal School Code': 9077,
		'TAP College Name': 'UTICA SCHOOL OF COMMERCE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4008.86
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7863,
		'Federal School Code': 21634,
		'TAP College Name': 'NEW YORK CAREER INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 17062.95
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 26.5,
		'Scholarship Dollars': 105598.6
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7845,
		'Federal School Code': 4811,
		'TAP College Name': 'EVEREST INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 14653.3
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7839,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9758.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7837,
		'Federal School Code': 107329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.83,
		'Scholarship Dollars': 8888.25
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7833,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 14590.56
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 10.58,
		'Scholarship Dollars': 26277.54
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7826,
		'Federal School Code': 17163,
		'TAP College Name': 'ART INSTITUTE OF NEW YORK CITY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.33,
		'Scholarship Dollars': 3829.69
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7738,
		'Federal School Code': 20937,
		'TAP College Name': 'LONG ISLAND BUSINESS INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 735
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 5843.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 26732.6
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8.13,
		'Scholarship Dollars': 16804.63
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 17905.6
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 9535.05
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7699,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE-2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 1875
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 27.67,
		'Scholarship Dollars': 81351.04
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7491,
		'Federal School Code': 11647,
		'TAP College Name': 'SANFORD BROWN INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.33,
		'Scholarship Dollars': 16742.99
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7264,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE-PATCHOGUE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 10981.97
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 14637.3
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 21309.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7045,
		'Federal School Code': 10837,
		'TAP College Name': 'SIMMONS INSTITUTE FUNERAL SERVICE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 245
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 10.96,
		'Scholarship Dollars': 50813.56
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 3110.05
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 78,
		'Scholarship FTE': 72.67,
		'Scholarship Dollars': 303193.02
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6698,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE- BA',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 220.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.67,
		'Scholarship Dollars': 6935.7
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 26862.95
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6270,
		'Federal School Code': 25994,
		'TAP College Name': 'NY COLL HEALTH PROF',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6118.87
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.25,
		'Scholarship Dollars': 31446
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 38664.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 18961.7
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 11.17,
		'Scholarship Dollars': 30595.35
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 23.79,
		'Scholarship Dollars': 62312.26
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 36327.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 20.5,
		'Scholarship Dollars': 58685
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 20.5,
		'Scholarship Dollars': 53798.99
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 23,
		'Scholarship Dollars': 69430.78
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 39,
		'Scholarship FTE': 36.5,
		'Scholarship Dollars': 52180.69
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 8414
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5866,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4879.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS-GRAD',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4879.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5830,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.38,
		'Scholarship Dollars': 1819.66
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5820,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIVERSITY UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 14605.25
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5805,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 8.75,
		'Scholarship Dollars': 37043.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 2.54,
		'Scholarship Dollars': 20933.33
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5785,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4879.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5780,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE PHYS/OCC THERAPY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.92,
		'Scholarship Dollars': 4471.17
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 3.96,
		'Scholarship Dollars': 92045.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5755,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4805.04
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 176675.64
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.63,
		'Scholarship Dollars': 68839.82
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 3655.31
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 48144.98
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5685,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4979
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 16561.99
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5645,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY  BARUCH COLL GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.75,
		'Scholarship Dollars': 12920.71
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 10046.84
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.17,
		'Scholarship Dollars': 37311.97
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5615,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4979
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2431.55
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5605,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1789.15
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5600,
		'Federal School Code': 38813,
		'TAP College Name': 'GRADUATE COLLEGE UNION UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4503.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5590,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 403.82
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5585,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 987
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5565,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 21843.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5555,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2431.54
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 3655.32
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5536,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MED CENTER GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 2460.05
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5533,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY SCHOOL OF LAW',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4879.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 1766
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5515,
		'Federal School Code': 2783,
		'TAP College Name': 'NEW YORK LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9758.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5480,
		'Federal School Code': 2677,
		'TAP College Name': 'BROOKLYN LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5.92,
		'Scholarship Dollars': 28866.84
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5475,
		'Federal School Code': 2887,
		'TAP College Name': 'ALBANY MEDICAL COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4879.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5455,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.04,
		'Scholarship Dollars': 5067.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 31087.94
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5435,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4879.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 11.25,
		'Scholarship Dollars': 62650.28
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5425,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5420,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.38,
		'Scholarship Dollars': 1819.66
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 28388.04
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 5.42,
		'Scholarship Dollars': 35677.45
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 11246.76
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5395,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 4.92,
		'Scholarship Dollars': 19935.77
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 8.33,
		'Scholarship Dollars': 37669.98
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5355,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.46,
		'Scholarship Dollars': 18796.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5345,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 3070.61
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5330,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4979
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 7.42,
		'Scholarship Dollars': 158266.14
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5320,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.67,
		'Scholarship Dollars': 31433.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 4.75,
		'Scholarship Dollars': 36055.91
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5275,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4139.09
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 5490.98
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 24545.31
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5240,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV  INTL AFFAIRS GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.75,
		'Scholarship Dollars': 18292.61
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5235,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 5325.62
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5220,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY- GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 13196.75
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5216,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 13.88,
		'Scholarship Dollars': 51338.68
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5215,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 12954.56
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5210,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 15260.19
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5205,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 1.88,
		'Scholarship Dollars': 9098.29
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5200,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2431.55
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5133,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2431.55
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5132,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6,
		'Scholarship Dollars': 29274.6
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 22,
		'Scholarship FTE': 17.33,
		'Scholarship Dollars': 80024.41
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5120,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 10965.97
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.13,
		'Scholarship Dollars': 12561.92
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5110,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY - GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 8534.42
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5105,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 3247.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5100,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 7180.17
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5075,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9758.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5070,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 0.88,
		'Scholarship Dollars': 4251.21
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5065,
		'Federal School Code': 7109,
		'TAP College Name': 'SUC OLD WESTBURY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1207.77
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 13.71,
		'Scholarship Dollars': 95215.36
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5045,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 14589.27
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5042,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.92,
		'Scholarship Dollars': 4471.17
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5040,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.13,
		'Scholarship Dollars': 5490.99
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5035,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV.-JOHNSON GRAD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 12189.75
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5034,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.83,
		'Scholarship Dollars': 14956.23
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5030,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 44847.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.25,
		'Scholarship Dollars': 30482.37
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5017,
		'Federal School Code': 12277,
		'TAP College Name': 'NEW YORK CHIROPRACTIC COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.67,
		'Scholarship Dollars': 8142.5
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5011,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 17168.75
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 39,
		'Scholarship FTE': 34,
		'Scholarship Dollars': 72067.83
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 14321.7
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 22.25,
		'Scholarship Dollars': 38479.8
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 11.5,
		'Scholarship Dollars': 72008.11
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 17.5,
		'Scholarship Dollars': 103507.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 37508.86
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 31.21,
		'Scholarship Dollars': 73305.58
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 39,
		'Scholarship Dollars': 55048.97
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9774.2
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 2046.93
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 2676.55
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 9307.1
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 3856
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 27.5,
		'Scholarship Dollars': 63016.98
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.29,
		'Scholarship Dollars': 11495.6
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 62,
		'Scholarship FTE': 53.67,
		'Scholarship Dollars': 149977.24
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 20,
		'Scholarship Dollars': 22973.53
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 26,
		'Scholarship Dollars': 57509.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 13.25,
		'Scholarship Dollars': 26780.16
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 16.42,
		'Scholarship Dollars': 27186.52
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 16552.65
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 10.92,
		'Scholarship Dollars': 17469.3
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 9177.4
	},
	{
		'Academic Year': 2010,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 31.29,
		'Scholarship Dollars': 72348.76
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5490,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV JOURNALISM GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1415,
		'Federal School Code': 10097,
		'TAP College Name': 'CUNY MEDGER EVERS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 23.38,
		'Scholarship Dollars': 34281.01
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5480,
		'Federal School Code': 2677,
		'TAP College Name': 'BROOKLYN LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 24475.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5475,
		'Federal School Code': 2887,
		'TAP College Name': 'ALBANY MEDICAL COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 715,
		'Federal School Code': 2820,
		'TAP College Name': 'ST FRANCIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 45,
		'Scholarship FTE': 39.5,
		'Scholarship Dollars': 120006.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1414,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 211,
		'Scholarship FTE': 176.08,
		'Scholarship Dollars': 299138.39
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5470,
		'Federal School Code': 2886,
		'TAP College Name': 'ALBANY LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5465,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV BUSIESS GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 31818.15
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1413,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 513,
		'Scholarship FTE': 458.29,
		'Scholarship Dollars': 393422.08
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5460,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5455,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 11013.97
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 325,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 88,
		'Scholarship FTE': 85,
		'Scholarship Dollars': 250800.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 710,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH COLG OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 980
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1412,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 173,
		'Scholarship FTE': 151.71,
		'Scholarship Dollars': 155308.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5450,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON(GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5.13,
		'Scholarship Dollars': 38465.01
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5431,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1411,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 528,
		'Scholarship FTE': 475.96,
		'Scholarship Dollars': 504435.49
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5430,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 18.13,
		'Scholarship Dollars': 133132.61
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5420,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 14470.42
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 695,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 81,
		'Scholarship FTE': 76.25,
		'Scholarship Dollars': 100795.84
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1410,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 306,
		'Scholarship FTE': 258.54,
		'Scholarship Dollars': 287929.32
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5415,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE-GRADUATE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.67,
		'Scholarship Dollars': 48301.32
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 7,
		'Scholarship Dollars': 32295.12
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1409,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY BARUCH COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 404,
		'Scholarship FTE': 354.63,
		'Scholarship Dollars': 358861.07
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5400,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4.13,
		'Scholarship Dollars': 17617.13
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5396,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE LAW SCHOOL',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 4900.69
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 166,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV NURSING PROG',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 122.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 305,
		'Federal School Code': 2734,
		'TAP College Name': 'HOUGHTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 135,
		'Scholarship FTE': 129.5,
		'Scholarship Dollars': 134857.2
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 685,
		'Federal School Code': 2816,
		'TAP College Name': 'SIENA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 208,
		'Scholarship FTE': 200.5,
		'Scholarship Dollars': 293928.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1407,
		'Federal School Code': 2697,
		'TAP College Name': 'CUNY QUEENSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 42,
		'Scholarship FTE': 29.75,
		'Scholarship Dollars': 34440.59
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5395,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 5.17,
		'Scholarship Dollars': 17259.7
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5390,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY AT ALBANY GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 4.63,
		'Scholarship Dollars': 22690.24
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1405,
		'Federal School Code': 2696,
		'TAP College Name': 'CUNY NYC COLLEGE OF TECHNOLOGY',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 99,
		'Scholarship FTE': 77.63,
		'Scholarship Dollars': 89634.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5385,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY LAW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5355,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 14630
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 675,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 36.63,
		'Scholarship Dollars': 35005.21
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1404,
		'Federal School Code': 2691,
		'TAP College Name': 'CUNY MANHATTAN CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 88,
		'Scholarship FTE': 62.04,
		'Scholarship Dollars': 99318.95
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5345,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.54
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5330,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4995
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1403,
		'Federal School Code': 10051,
		'TAP College Name': 'CUNY LAGUARDIA CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 36,
		'Scholarship Dollars': 64728.18
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5325,
		'Federal School Code': 2810,
		'TAP College Name': 'THE SAGE COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 8.92,
		'Scholarship Dollars': 204001.87
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5320,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 19680.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 300,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 183,
		'Scholarship FTE': 172.75,
		'Scholarship Dollars': 410193.19
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 670,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 83,
		'Scholarship FTE': 78.63,
		'Scholarship Dollars': 100866.77
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1402,
		'Federal School Code': 2694,
		'TAP College Name': 'CUNY KINGSBOROUGH CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 47.63,
		'Scholarship Dollars': 109030.9
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5310,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 16330.17
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5275,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1401,
		'Federal School Code': 8611,
		'TAP College Name': 'CUNY HOSTOS CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 14,
		'Scholarship Dollars': 20773.04
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5271,
		'Federal School Code': 7022,
		'TAP College Name': 'CUNY HERBERT H LEHMAN GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9890.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5270,
		'Federal School Code': 2689,
		'TAP College Name': 'CUNY HUNTER COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.04,
		'Scholarship Dollars': 13032.69
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 650,
		'Federal School Code': 2806,
		'TAP College Name': 'ROCHESTER INSTITUTE OF TECHLGY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 677,
		'Scholarship FTE': 589.79,
		'Scholarship Dollars': 587449.76
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1400,
		'Federal School Code': 2692,
		'TAP College Name': 'CUNY BRONX CC',
		'TAP Sector Group': '2-CUNY CC',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 29.71,
		'Scholarship Dollars': 29173.7
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5268,
		'Federal School Code': 2732,
		'TAP College Name': 'HOFSTRA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5240,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV  INTL AFFAIRS GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 11013.96
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1099,
		'Federal School Code': 9769,
		'TAP College Name': 'METROPOLITAN COLLEGE OF NY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 3672.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5235,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.25,
		'Scholarship Dollars': 8796.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5220,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY- GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 6855.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 90,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 261,
		'Scholarship FTE': 256,
		'Scholarship Dollars': 246503.59
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 155,
		'Federal School Code': 2708,
		'TAP College Name': 'BARNARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 177,
		'Scholarship FTE': 169.5,
		'Scholarship Dollars': 138451
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 295,
		'Federal School Code': 2731,
		'TAP College Name': 'HOBART AND WILLIAM SMITH COLLEGES',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 125,
		'Scholarship FTE': 122,
		'Scholarship Dollars': 110775.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 640,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 75,
		'Scholarship FTE': 72.13,
		'Scholarship Dollars': 77635.54
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1085,
		'Federal School Code': 2903,
		'TAP College Name': 'YESHIVA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 73,
		'Scholarship FTE': 72,
		'Scholarship Dollars': 77030
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5216,
		'Federal School Code': 2693,
		'TAP College Name': 'CUNY JOHN JAY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 14.25,
		'Scholarship Dollars': 51672.97
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5215,
		'Federal School Code': 2688,
		'TAP College Name': 'CUNY CITY COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.21,
		'Scholarship Dollars': 7629.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1075,
		'Federal School Code': 7465,
		'TAP College Name': 'AMERICAN ACAD OF DRAMATIC ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 441
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5210,
		'Federal School Code': 2681,
		'TAP College Name': 'CANISIUS COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 1374.8
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5205,
		'Federal School Code': 2687,
		'TAP College Name': 'CUNY BROOKLYN COLLEGE GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.38,
		'Scholarship Dollars': 6730.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 635,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 457,
		'Scholarship FTE': 433.5,
		'Scholarship Dollars': 400873.88
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1050,
		'Federal School Code': 2901,
		'TAP College Name': 'WELLS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 42,
		'Scholarship Dollars': 36155.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5200,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5140,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.79,
		'Scholarship Dollars': 24995
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1045,
		'Federal School Code': 2900,
		'TAP College Name': 'WEBB INST OF NAVAL ARCH.',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 7350
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5133,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5132,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.25,
		'Scholarship Dollars': 35489.47
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 285,
		'Federal School Code': 2729,
		'TAP College Name': 'HARTWICK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 56.5,
		'Scholarship Dollars': 85513.8
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 615,
		'Federal School Code': 2798,
		'TAP College Name': 'PRATT INSTITUTE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 40.5,
		'Scholarship Dollars': 28985
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1040,
		'Federal School Code': 2899,
		'TAP College Name': 'WAGNER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 57,
		'Scholarship FTE': 55.25,
		'Scholarship Dollars': 152340.63
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5130,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 14.21,
		'Scholarship Dollars': 73833.66
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5120,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 1.88,
		'Scholarship Dollars': 9178.28
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1030,
		'Federal School Code': 2895,
		'TAP College Name': 'VASSAR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 150,
		'Scholarship FTE': 138.5,
		'Scholarship Dollars': 108905
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5115,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.67,
		'Scholarship Dollars': 34889.41
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5110,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY - GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.13,
		'Scholarship Dollars': 10402.08
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 610,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 129,
		'Scholarship FTE': 123,
		'Scholarship Dollars': 111450.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1022,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIV UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 82,
		'Scholarship FTE': 76,
		'Scholarship Dollars': 76463.78
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5105,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 3059.44
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5100,
		'Federal School Code': 2817,
		'TAP College Name': 'ST BONAVENTURE UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1016,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 13520
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5080,
		'Federal School Code': 2803,
		'TAP College Name': 'RENSSELAER POLYTECHNIC INST',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.63,
		'Scholarship Dollars': 3059.43
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5075,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 150,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 261,
		'Scholarship FTE': 258.25,
		'Scholarship Dollars': 259648.9
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 270,
		'Federal School Code': 2728,
		'TAP College Name': 'HAMILTON COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 140,
		'Scholarship FTE': 138,
		'Scholarship Dollars': 143216.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 591,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY WESTCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 55,
		'Scholarship Dollars': 194995.99
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1015,
		'Federal School Code': 2894,
		'TAP College Name': 'UNIVERSITY OF ROCHESTER',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 568,
		'Scholarship FTE': 557.25,
		'Scholarship Dollars': 467306.9
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5070,
		'Federal School Code': 2796,
		'TAP College Name': 'POLYTECHNIC UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.25,
		'Scholarship Dollars': 6118.88
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5060,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 11.67,
		'Scholarship Dollars': 126568.91
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1010,
		'Federal School Code': 2837,
		'TAP College Name': 'SUNY BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 912,
		'Scholarship FTE': 866.75,
		'Scholarship Dollars': 939083.57
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5045,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.38,
		'Scholarship Dollars': 11725.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5042,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.67,
		'Scholarship Dollars': 3263.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 590,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 105,
		'Scholarship FTE': 96.58,
		'Scholarship Dollars': 160980.32
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 999,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 7.83,
		'Scholarship Dollars': 12796.85
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5040,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5035,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV.-JOHNSON GRAD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 995,
		'Federal School Code': 2885,
		'TAP College Name': 'ALBANY COLLEGE OF PHARMACY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 162,
		'Scholarship FTE': 157.25,
		'Scholarship Dollars': 118927.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5030,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5021,
		'Federal School Code': 3979,
		'TAP College Name': 'COLUMBIA U TEACHERS COL GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.75,
		'Scholarship Dollars': 80031.06
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 245,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 389,
		'Scholarship FTE': 374.63,
		'Scholarship Dollars': 662574.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 575,
		'Federal School Code': 2790,
		'TAP College Name': 'NYACK COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 16.42,
		'Scholarship Dollars': 31780
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 990,
		'Federal School Code': 2889,
		'TAP College Name': 'UNION COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 130,
		'Scholarship FTE': 123.83,
		'Scholarship Dollars': 141970.14
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5020,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA U GRADUATE PROGRAMS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 12237.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5017,
		'Federal School Code': 12277,
		'TAP College Name': 'NEW YORK CHIROPRACTIC COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 985,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY (UNDERGRAD)',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 540,
		'Scholarship FTE': 518.5,
		'Scholarship Dollars': 641215.03
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5011,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 7278.87
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5000,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.13,
		'Scholarship Dollars': 64649.05
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 560,
		'Federal School Code': 2788,
		'TAP College Name': 'NIAGARA UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 146,
		'Scholarship FTE': 138.63,
		'Scholarship Dollars': 175629.46
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 975,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH UPPER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 25.25,
		'Scholarship Dollars': 38307.66
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 4975,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 49.17,
		'Scholarship Dollars': 67359.73
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 4886,
		'Federal School Code': 2839,
		'TAP College Name': 'SUNY DOWNSTATE MEDICAL CENTER',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 10832.65
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 970,
		'Federal School Code': 6791,
		'TAP College Name': 'SUC PURCHASE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 60,
		'Scholarship FTE': 58.5,
		'Scholarship Dollars': 133731.12
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 3030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 30.54,
		'Scholarship Dollars': 73582.29
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 3025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 13.5,
		'Scholarship Dollars': 90510.86
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 20,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 48,
		'Scholarship Dollars': 42000
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 55,
		'Federal School Code': 21068,
		'TAP College Name': 'BRAMSON ORT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 5316.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 140,
		'Federal School Code': 2705,
		'TAP College Name': 'COLLEGE OF SAINT ROSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 133,
		'Scholarship FTE': 125.5,
		'Scholarship Dollars': 223607.38
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 215,
		'Federal School Code': 2718,
		'TAP College Name': 'ELMIRA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 125,
		'Scholarship FTE': 120.5,
		'Scholarship Dollars': 166325.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 555,
		'Federal School Code': 2785,
		'TAP College Name': 'NEW YORK UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 846,
		'Scholarship FTE': 799.08,
		'Scholarship Dollars': 949850.07
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 965,
		'Federal School Code': 7109,
		'TAP College Name': 'SUNY COLLEGE AT OLD WESTBURY (UG)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 26.5,
		'Scholarship Dollars': 62989.53
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 3020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 24,
		'Scholarship FTE': 21.5,
		'Scholarship Dollars': 56139.65
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 3015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.5,
		'Scholarship Dollars': 33284.76
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 960,
		'Federal School Code': 2668,
		'TAP College Name': 'ALFRED UNIVERSITY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 34.5,
		'Scholarship Dollars': 25986
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 3010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 37,
		'Scholarship FTE': 29.67,
		'Scholarship Dollars': 68656.61
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 3005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 47.5,
		'Scholarship Dollars': 51757.7
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 535,
		'Federal School Code': 20662,
		'TAP College Name': 'THE NEW SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 27,
		'Scholarship FTE': 26.75,
		'Scholarship Dollars': 53878.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 955,
		'Federal School Code': 2853,
		'TAP College Name': 'SUNY MARITIME COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 25,
		'Scholarship FTE': 22.5,
		'Scholarship Dollars': 165144.27
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2320,
		'Federal School Code': 21700,
		'TAP College Name': 'SWEDISH INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 14268.56
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 12128.54
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 950,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 99,
		'Scholarship FTE': 92.5,
		'Scholarship Dollars': 93474.52
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2310,
		'Federal School Code': 34044,
		'TAP College Name': 'GAMLA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 625
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2300,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.75,
		'Scholarship Dollars': 367.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 210,
		'Federal School Code': 6448,
		'TAP College Name': 'THE BELANGER SCHOOL OF NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 220.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 525,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 179,
		'Scholarship FTE': 172.5,
		'Scholarship Dollars': 194664.05
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 945,
		'Federal School Code': 2850,
		'TAP College Name': 'SUC POTSDAM',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 207,
		'Scholarship FTE': 196.29,
		'Scholarship Dollars': 288860.35
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2270,
		'Federal School Code': 25994,
		'TAP College Name': 'NEW YORK COLL OF HEALTH PROFESSIO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2265,
		'Federal School Code': 21691,
		'TAP College Name': 'DAVIS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 12782.65
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 940,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 178,
		'Scholarship FTE': 164,
		'Scholarship Dollars': 287620.81
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2262,
		'Federal School Code': 13029,
		'TAP College Name': 'BORICUA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 1960
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2260,
		'Federal School Code': 6788,
		'TAP College Name': 'TOMPKINS CORTLAND COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 26.88,
		'Scholarship Dollars': 51957.58
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 505,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 40967.85
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 935,
		'Federal School Code': 2848,
		'TAP College Name': 'SUC OSWEGO (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 231,
		'Scholarship FTE': 218,
		'Scholarship Dollars': 412678.89
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2258,
		'Federal School Code': 7111,
		'TAP College Name': 'NORTH COUNTRY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7.08,
		'Scholarship Dollars': 15268.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2256,
		'Federal School Code': 7532,
		'TAP College Name': 'FINGER LAKES COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 74,
		'Scholarship FTE': 56.42,
		'Scholarship Dollars': 129428.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 930,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 216,
		'Scholarship FTE': 202.25,
		'Scholarship Dollars': 344442.82
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2254,
		'Federal School Code': 4788,
		'TAP College Name': 'HERKIMER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 13.38,
		'Scholarship Dollars': 13956.7
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2252,
		'Federal School Code': 6782,
		'TAP College Name': 'GENESEE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 40,
		'Scholarship FTE': 32.25,
		'Scholarship Dollars': 67138.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 136,
		'Federal School Code': 2704,
		'TAP College Name': 'COLL OF NEW ROCHELLE NEW RESOURCE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 29,
		'Scholarship FTE': 24.75,
		'Scholarship Dollars': 26246.15
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 195,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 55,
		'Scholarship FTE': 50.63,
		'Scholarship Dollars': 82333.05
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 500,
		'Federal School Code': 2775,
		'TAP College Name': 'MOLLOY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 58,
		'Scholarship FTE': 55.83,
		'Scholarship Dollars': 216978.52
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 925,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 198,
		'Scholarship FTE': 186.25,
		'Scholarship Dollars': 349065.86
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2243,
		'Federal School Code': 6785,
		'TAP College Name': 'SCHENECTADY COUNTY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 10.58,
		'Scholarship Dollars': 14682.78
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2240,
		'Federal School Code': 2867,
		'TAP College Name': 'FULTON MONTGOMERY COMM COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 14.17,
		'Scholarship Dollars': 25620.18
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 920,
		'Federal School Code': 2845,
		'TAP College Name': 'SUC GENESEO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 736,
		'Scholarship FTE': 701.92,
		'Scholarship Dollars': 694354.14
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2235,
		'Federal School Code': 2665,
		'TAP College Name': 'VAUGHN COLL AERONAUTICS TECH',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 17,
		'Scholarship FTE': 13.5,
		'Scholarship Dollars': 17222.64
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2230,
		'Federal School Code': 2880,
		'TAP College Name': 'ULSTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 12.29,
		'Scholarship Dollars': 11618.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 455,
		'Federal School Code': 12203,
		'TAP College Name': 'ALBANY MEMORIAL HOSP SCHOOL NURS',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.54,
		'Scholarship Dollars': 2651.68
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 915,
		'Federal School Code': 2844,
		'TAP College Name': 'SUC FREDONIA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 217,
		'Scholarship FTE': 205.25,
		'Scholarship Dollars': 247073.76
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2225,
		'Federal School Code': 2879,
		'TAP College Name': 'SULLIVAN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 6.25,
		'Scholarship Dollars': 15812.56
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2220,
		'Federal School Code': 2870,
		'TAP College Name': 'JEFFERSON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 71,
		'Scholarship FTE': 52.54,
		'Scholarship Dollars': 107015.97
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 913,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 128,
		'Scholarship FTE': 89.04,
		'Scholarship Dollars': 380433.22
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2215,
		'Federal School Code': 2874,
		'TAP College Name': 'NIAGARA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 53,
		'Scholarship FTE': 40.75,
		'Scholarship Dollars': 97057.19
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2188,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 15991.15
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 190,
		'Federal School Code': 6445,
		'TAP College Name': 'CROUSE HOSPITAL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.88,
		'Scholarship Dollars': 4310.66
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 447,
		'Federal School Code': 2769,
		'TAP College Name': 'MARYMOUNT MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 13,
		'Scholarship Dollars': 14145.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 910,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 199,
		'Scholarship FTE': 177.25,
		'Scholarship Dollars': 385486.7
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2185,
		'Federal School Code': 2875,
		'TAP College Name': 'ONONDAGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 149,
		'Scholarship FTE': 115.88,
		'Scholarship Dollars': 288178.19
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7977,
		'Federal School Code': 7401,
		'TAP College Name': 'MANDL SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7952,
		'Federal School Code': 10813,
		'TAP College Name': 'AMERICAN ACADEMY MCALLISTER INST.',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 490
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2180,
		'Federal School Code': 2872,
		'TAP College Name': 'MONROE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 188,
		'Scholarship FTE': 142.33,
		'Scholarship Dollars': 250879.24
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7941,
		'Federal School Code': 20937,
		'TAP College Name': 'LONG ISLAND BUSINESS INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 16856
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7895,
		'Federal School Code': 7405,
		'TAP College Name': 'WOOD TOBE-COBURN SCHOOL',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 18399.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 905,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 190,
		'Scholarship FTE': 169.38,
		'Scholarship Dollars': 345276.04
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2178,
		'Federal School Code': 7466,
		'TAP College Name': 'LAB INST OF MERCHANDISING',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 12,
		'Scholarship Dollars': 45939
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7870,
		'Federal School Code': 9077,
		'TAP College Name': 'UTICA SCHOOL OF COMMERCE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 220.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7863,
		'Federal School Code': 21634,
		'TAP College Name': 'NEW YORK CAREER INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 21893.19
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2160,
		'Federal School Code': 2881,
		'TAP College Name': 'WESTCHESTER COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 25.67,
		'Scholarship Dollars': 85685.17
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7858,
		'Federal School Code': 7468,
		'TAP College Name': 'SCHOOL OF VISUAL ARTS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 28,
		'Scholarship FTE': 26,
		'Scholarship Dollars': 109481.26
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7845,
		'Federal School Code': 4811,
		'TAP College Name': 'EVEREST INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.67,
		'Scholarship Dollars': 8158.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 440,
		'Federal School Code': 2765,
		'TAP College Name': 'MARIST COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 150,
		'Scholarship FTE': 144.25,
		'Scholarship Dollars': 391418.74
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 900,
		'Federal School Code': 2841,
		'TAP College Name': 'SUC BROCKPORT (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 301,
		'Scholarship FTE': 275.58,
		'Scholarship Dollars': 466516.18
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2158,
		'Federal School Code': 2896,
		'TAP College Name': 'VILLA MARIA COLLEGE OF BUFFALO',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 6882.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7839,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9790.2
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7837,
		'Federal School Code': 107329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 14088.35
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2157,
		'Federal School Code': 2878,
		'TAP College Name': 'SUFFOLK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 93,
		'Scholarship FTE': 66.08,
		'Scholarship Dollars': 274360.28
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7833,
		'Federal School Code': 7329,
		'TAP College Name': 'ITT TECHNICAL INSTITUTE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 36127.7
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7830,
		'Federal School Code': 11031,
		'TAP College Name': 'TECHNICAL CAREER INSTITUTES',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 13.17,
		'Scholarship Dollars': 36939.51
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 895,
		'Federal School Code': 2835,
		'TAP College Name': 'SUNY ALBANY (UNDERGRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 446,
		'Scholarship FTE': 413.83,
		'Scholarship Dollars': 864337.87
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2147,
		'Federal School Code': 2877,
		'TAP College Name': 'ROCKLAND COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 16.88,
		'Scholarship Dollars': 72109.85
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7826,
		'Federal School Code': 17163,
		'TAP College Name': 'ART INSTITUTE OF NEW YORK CITY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.67,
		'Scholarship Dollars': 14496.32
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7736,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON SYRACUSE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 11787.2
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2144,
		'Federal School Code': 2812,
		'TAP College Name': 'TROCAIRE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 21,
		'Scholarship FTE': 15.92,
		'Scholarship Dollars': 36709.34
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7734,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ROCHESTER',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 9.13,
		'Scholarship Dollars': 36108.23
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 10.25,
		'Scholarship Dollars': 37645.47
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 45,
		'Federal School Code': 6438,
		'TAP College Name': 'PHILLIPS BETH ISRAEL SCH.NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 1985
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 130,
		'Federal School Code': 2703,
		'TAP College Name': 'COL OF MT ST VINCENT 4YR SEM',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 50,
		'Scholarship FTE': 47.5,
		'Scholarship Dollars': 140997.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 175,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 871,
		'Scholarship FTE': 839.5,
		'Scholarship Dollars': 788448.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 420,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 31.5,
		'Scholarship Dollars': 111820.38
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 890,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.5,
		'Scholarship Dollars': 7375.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2125,
		'Federal School Code': 2876,
		'TAP College Name': 'ORANGE COUNTY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 44,
		'Scholarship FTE': 35.33,
		'Scholarship Dollars': 150407.08
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7730,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON ALBANY',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 11,
		'Scholarship FTE': 11,
		'Scholarship Dollars': 47998.45
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7725,
		'Federal School Code': 30955,
		'TAP College Name': 'ASA INSTITUTE OF BUSINESS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 14675.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2122,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH ELLIS ONLINE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9790.2
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7720,
		'Federal School Code': 25729,
		'TAP College Name': 'BUSINESS INFORMATICS',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.33,
		'Scholarship Dollars': 1631.7
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7718,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 880,
		'Federal School Code': 2836,
		'TAP College Name': 'SUNY BINGHAMTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 846,
		'Scholarship FTE': 820.21,
		'Scholarship Dollars': 936891.24
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2120,
		'Federal School Code': 2782,
		'TAP College Name': 'NEW YORK INST TECH 4YR',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 103,
		'Scholarship FTE': 94.5,
		'Scholarship Dollars': 114663.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7699,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE-2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1250
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7690,
		'Federal School Code': 9003,
		'TAP College Name': 'OLEAN BUSINESS INST',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 1470
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2113,
		'Federal School Code': 2873,
		'TAP College Name': 'NASSAU COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 56,
		'Scholarship FTE': 40.25,
		'Scholarship Dollars': 206648.56
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7518,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 20,
		'Scholarship FTE': 20.42,
		'Scholarship Dollars': 67238.79
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7510,
		'Federal School Code': 22195,
		'TAP College Name': 'EMPIRE EDUCATION CORPORATION',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 410,
		'Federal School Code': 2759,
		'TAP College Name': 'MANHATTAN SCHOOL OF MUSIC',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 980
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 875,
		'Federal School Code': 2838,
		'TAP College Name': 'SUNY STONY BROOK',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 812,
		'Scholarship FTE': 769.25,
		'Scholarship Dollars': 790029.6
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2110,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 52,
		'Scholarship FTE': 48.13,
		'Scholarship Dollars': 243838.43
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7481,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3.33,
		'Scholarship Dollars': 10927.8
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7480,
		'Federal School Code': 8495,
		'TAP College Name': 'JAMESTOWN BUSINESS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 4.92,
		'Scholarship Dollars': 18194.09
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2105,
		'Federal School Code': 2871,
		'TAP College Name': 'MOHAWK VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 65,
		'Scholarship FTE': 58.92,
		'Scholarship Dollars': 112839.02
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7264,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE-PATCHOGUE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 9790.2
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 14930.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 865,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 117,
		'Scholarship FTE': 112.75,
		'Scholarship Dollars': 161863.61
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2100,
		'Federal School Code': 2772,
		'TAP College Name': 'MERCY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 34.38,
		'Scholarship Dollars': 66028.11
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7124,
		'Federal School Code': 5208,
		'TAP College Name': 'COLL WESTCHESTER 2YR',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 5.5,
		'Scholarship Dollars': 14308
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7045,
		'Federal School Code': 10837,
		'TAP College Name': 'SIMMONS INSTITUTE FUNERAL SERVICE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 490
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2093,
		'Federal School Code': 2763,
		'TAP College Name': 'MARIA COLLEGE-REGULAR DAY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.63,
		'Scholarship Dollars': 5727.71
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7035,
		'Federal School Code': 7421,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.67,
		'Scholarship Dollars': 8158.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7031,
		'Federal School Code': 7394,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.67,
		'Scholarship Dollars': 13053.6
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 174,
		'Federal School Code': 2711,
		'TAP College Name': 'CORNELL UNIV STATUTORY COLLEGES',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 426,
		'Scholarship FTE': 407.5,
		'Scholarship Dollars': 341492.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 405,
		'Federal School Code': 2758,
		'TAP College Name': 'MANHATTAN COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 142,
		'Scholarship FTE': 136.5,
		'Scholarship Dollars': 359704.35
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 855,
		'Federal School Code': 2814,
		'TAP College Name': 'SKIDMORE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 115,
		'Scholarship FTE': 114,
		'Scholarship Dollars': 131702.8
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2085,
		'Federal School Code': 2869,
		'TAP College Name': 'JAMESTOWN COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 76,
		'Scholarship FTE': 64.25,
		'Scholarship Dollars': 118712.06
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 7030,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 5,
		'Scholarship Dollars': 34086.02
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6735,
		'Federal School Code': 7421,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 23645.76
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2083,
		'Federal School Code': 2735,
		'TAP College Name': 'HILBERT COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 9,
		'Scholarship Dollars': 16893.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6732,
		'Federal School Code': 2678,
		'TAP College Name': 'BRYANT & STRATTON BUFFALO',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 441
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6731,
		'Federal School Code': 7394,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 7.17,
		'Scholarship Dollars': 30676.44
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 845,
		'Federal School Code': 2813,
		'TAP College Name': 'SARAH LAWRENCE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 26,
		'Scholarship FTE': 24.5,
		'Scholarship Dollars': 31918.2
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2080,
		'Federal School Code': 2868,
		'TAP College Name': 'HUDSON VALLEY COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 61,
		'Scholarship FTE': 48.46,
		'Scholarship Dollars': 63718.72
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6730,
		'Federal School Code': 8556,
		'TAP College Name': 'BERKELEY COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 39,
		'Scholarship FTE': 32,
		'Scholarship Dollars': 101926.04
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6698,
		'Federal School Code': 12358,
		'TAP College Name': 'PLAZA COLLEGE- BA',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 661.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2075,
		'Federal School Code': 12561,
		'TAP College Name': 'FIVE TOWNS COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 7.5,
		'Scholarship Dollars': 22785.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6315,
		'Federal School Code': 10727,
		'TAP College Name': 'DEVRY COLLEGE OF NEW YORK',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 7.42,
		'Scholarship Dollars': 11321.89
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6262,
		'Federal School Code': 20757,
		'TAP College Name': 'BRIARCLIFFE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 3,
		'Scholarship Dollars': 13090.36
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 403,
		'Federal School Code': 2751,
		'TAP College Name': 'LONG ISLAND UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 213,
		'Scholarship FTE': 192.75,
		'Scholarship Dollars': 511701.72
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 844,
		'Federal School Code': 9248,
		'TAP College Name': 'SAMARITAN HOSPITAL NURSING',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.58,
		'Scholarship Dollars': 2855.47
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2070,
		'Federal School Code': 2866,
		'TAP College Name': 'FASHION INST TECH-LOWER DIVISION',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 43,
		'Scholarship FTE': 40,
		'Scholarship Dollars': 75127.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6140,
		'Federal School Code': 2795,
		'TAP College Name': 'PAUL SMITHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 14,
		'Scholarship FTE': 14,
		'Scholarship Dollars': 28368.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 17816.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2065,
		'Federal School Code': 10684,
		'TAP College Name': 'ERIE COMMUNITY COLL - ALL CAMPUS',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 183,
		'Scholarship FTE': 139.5,
		'Scholarship Dollars': 324207.13
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6030,
		'Federal School Code': 2859,
		'TAP College Name': 'MORRISVILLE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 8956.17
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6025,
		'Federal School Code': 2858,
		'TAP College Name': 'SUNY COLLEGE OF TECH FARMINGDALE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 27.79,
		'Scholarship Dollars': 106648.67
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 840,
		'Federal School Code': 9248,
		'TAP College Name': 'SAMARITAN HOSP NURSING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 0.92,
		'Scholarship Dollars': 2284.79
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2053,
		'Federal School Code': 2864,
		'TAP College Name': 'DUTCHESS COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 30,
		'Scholarship FTE': 25.29,
		'Scholarship Dollars': 60530.47
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6020,
		'Federal School Code': 2857,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT DELHI',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 8,
		'Scholarship Dollars': 30234.15
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6018,
		'Federal School Code': 4799,
		'TAP College Name': 'MONROE COLLEGE',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 18,
		'Scholarship FTE': 22,
		'Scholarship Dollars': 68173.19
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2050,
		'Federal School Code': 2713,
		'TAP College Name': 'DOMINICAN COLLEGE OF BLAUVELT',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 6.5,
		'Scholarship Dollars': 22100
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6015,
		'Federal School Code': 2856,
		'TAP College Name': 'SUNY COBLESKILL',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 31,
		'Scholarship FTE': 24.96,
		'Scholarship Dollars': 54155.17
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6010,
		'Federal School Code': 2855,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT CANTON',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 15,
		'Scholarship FTE': 12.25,
		'Scholarship Dollars': 24633.77
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 125,
		'Federal School Code': 2701,
		'TAP College Name': 'COLGATE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 150,
		'Scholarship FTE': 146,
		'Scholarship Dollars': 154642.8
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 171,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 10,
		'Scholarship FTE': 8.5,
		'Scholarship Dollars': 32798.15
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 375,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 151,
		'Scholarship FTE': 147.5,
		'Scholarship Dollars': 157711.68
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 830,
		'Federal School Code': 2832,
		'TAP College Name': 'ST THOMAS AQUINAS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 36,
		'Scholarship FTE': 35.5,
		'Scholarship Dollars': 93359.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2045,
		'Federal School Code': 7304,
		'TAP College Name': 'CULINARY INSTITUTE OF AMERICA',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 9.5,
		'Scholarship Dollars': 23347.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 6005,
		'Federal School Code': 2854,
		'TAP College Name': 'SUNY COLLEGE OF TECH AT ALFRED',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 35,
		'Scholarship FTE': 32,
		'Scholarship Dollars': 41308.32
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5955,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.58,
		'Scholarship Dollars': 87957
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2042,
		'Federal School Code': 2863,
		'TAP College Name': 'CORNING COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 40.83,
		'Scholarship Dollars': 108184.44
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5915,
		'Federal School Code': 20754,
		'TAP College Name': 'KELLER GRAD SCHOOL OF MANAGEMENT',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 7342.65
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5866,
		'Federal School Code': 10142,
		'TAP College Name': 'TOURO COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 775,
		'Federal School Code': 2829,
		'TAP College Name': 'ST LAWRENCE UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 161,
		'Scholarship FTE': 156.25,
		'Scholarship Dollars': 170168.35
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2040,
		'Federal School Code': 2709,
		'TAP College Name': 'CONCORDIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 12.75,
		'Scholarship Dollars': 123583.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5820,
		'Federal School Code': 2883,
		'TAP College Name': 'SYRACUSE UNIVERSITY UTICA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 1.75,
		'Scholarship Dollars': 8566.41
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5815,
		'Federal School Code': 30277,
		'TAP College Name': 'PACIFIC COLLEGE OF ORIENTAL MED',
		'TAP Sector Group': '6-BUS. DEGREE',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2038,
		'Federal School Code': 6789,
		'TAP College Name': 'COLUMBIA-GREENE COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 10.5,
		'Scholarship Dollars': 19503.96
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5805,
		'Federal School Code': 2777,
		'TAP College Name': 'MEDAILLE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 17132.85
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5799,
		'Federal School Code': 2834,
		'TAP College Name': 'EXCELSIOR COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 3.29,
		'Scholarship Dollars': 61666.24
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 355,
		'Federal School Code': 40953,
		'TAP College Name': "THE KING'S COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 980
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 765,
		'Federal School Code': 6467,
		'TAP College Name': 'ST JOSEPH HOSP SCH NURS SYRACUSE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 4240
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2036,
		'Federal School Code': 6787,
		'TAP College Name': 'CLINTON COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 19,
		'Scholarship FTE': 18,
		'Scholarship Dollars': 44058.32
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5775,
		'Federal School Code': 2808,
		'TAP College Name': 'DAEMEN COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 13,
		'Scholarship FTE': 7.17,
		'Scholarship Dollars': 134052.6
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5755,
		'Federal School Code': 2748,
		'TAP College Name': 'LEMOYNE COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.25,
		'Scholarship Dollars': 1223.77
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2035,
		'Federal School Code': 2685,
		'TAP College Name': 'CAZENOVIA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 32,
		'Scholarship FTE': 31,
		'Scholarship Dollars': 29565.5
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5745,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4995
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5730,
		'Federal School Code': 2805,
		'TAP College Name': 'ROBERTS WESLEYAN COLLEGE-GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 16,
		'Scholarship FTE': 12.71,
		'Scholarship Dollars': 258397.16
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 762,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE - WEEKEND',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.33,
		'Scholarship Dollars': 25386.9
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2025,
		'Federal School Code': 2862,
		'TAP College Name': 'BROOME COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 38,
		'Scholarship FTE': 27.08,
		'Scholarship Dollars': 31316.48
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5725,
		'Federal School Code': 2778,
		'TAP College Name': 'MOUNT SAINT MARY COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.5,
		'Scholarship Dollars': 102912.54
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5720,
		'Federal School Code': 2712,
		'TAP College Name': "D'YOUVILLE COLLEGE",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2005,
		'Federal School Code': 2861,
		'TAP College Name': 'CAYUGA COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 23,
		'Scholarship FTE': 20.67,
		'Scholarship Dollars': 46224.43
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5695,
		'Federal School Code': 11678,
		'TAP College Name': 'SUNY INSTITUTE OF TECHNOLOGY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 7,
		'Scholarship FTE': 3.25,
		'Scholarship Dollars': 61545.65
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5685,
		'Federal School Code': 2779,
		'TAP College Name': 'NAZARETH COLLEGE GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.54
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 170,
		'Federal School Code': 2710,
		'TAP College Name': 'COOPER UNION ADVNCMT SCI ART',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 49,
		'Scholarship FTE': 48.5,
		'Scholarship Dollars': 44175
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 345,
		'Federal School Code': 2744,
		'TAP College Name': 'KEUKA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 46,
		'Scholarship FTE': 43,
		'Scholarship Dollars': 57806.3
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 758,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 114,
		'Scholarship FTE': 107.63,
		'Scholarship Dollars': 196844.48
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 2000,
		'Federal School Code': 2860,
		'TAP College Name': 'ADIRONDACK COMMUNITY COLLEGE',
		'TAP Sector Group': '4-SUNY CC',
		'Scholarship Headcount': 54,
		'Scholarship FTE': 42.04,
		'Scholarship Dollars': 72390.97
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5680,
		'Federal School Code': 10286,
		'TAP College Name': 'SUC EMPIRE STATE COLLEGE',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 8,
		'Scholarship FTE': 3.63,
		'Scholarship Dollars': 17442.27
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5645,
		'Federal School Code': 7273,
		'TAP College Name': 'CUNY  BARUCH COLL GRAD',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 12,
		'Scholarship FTE': 8.08,
		'Scholarship Dollars': 36271.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1690,
		'Federal School Code': 6461,
		'TAP College Name': 'ST ELIZABETH HOSP SCHOOL RAD TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 490
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5642,
		'Federal School Code': 2737,
		'TAP College Name': 'IONA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.13,
		'Scholarship Dollars': 611.89
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5635,
		'Federal School Code': 2760,
		'TAP College Name': 'MANHATTANVILLE COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4945.05
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 755,
		'Federal School Code': 2825,
		'TAP College Name': 'ST JOSEPHS COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 30,
		'Scholarship Dollars': 47924.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1653,
		'Federal School Code': 5066,
		'TAP College Name': 'FAXSTON ST LUKES SCHOOL RAD TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 2,
		'Scholarship Dollars': 931
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5625,
		'Federal School Code': 2842,
		'TAP College Name': 'SUC BUFFALO',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 9,
		'Scholarship FTE': 3.92,
		'Scholarship Dollars': 18675.62
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5620,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH AND UNIV CENTER',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 6,
		'Scholarship FTE': 3.54,
		'Scholarship Dollars': 77707.18
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1650,
		'Federal School Code': 5064,
		'TAP College Name': 'ST JAMES MERCY HOSP SCH XRAY TECH',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 3,
		'Scholarship FTE': 2.5,
		'Scholarship Dollars': 2945.4
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5610,
		'Federal School Code': 2849,
		'TAP College Name': 'SUNY PLATTSBURGH GRAD',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 6574.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5605,
		'Federal School Code': 2843,
		'TAP College Name': 'SUC CORTLAND',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 2.63,
		'Scholarship Dollars': 11427.44
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 340,
		'Federal School Code': 2742,
		'TAP College Name': 'JUILLIARD SCHOOL',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 4,
		'Scholarship FTE': 4,
		'Scholarship Dollars': 2720
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 751,
		'Federal School Code': 2823,
		'TAP College Name': 'ST JOHNS UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 536,
		'Scholarship FTE': 516.5,
		'Scholarship Dollars': 715305.79
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1620,
		'Federal School Code': 6435,
		'TAP College Name': 'ARNOT OGDEN MEDICAL CENTER',
		'TAP Sector Group': '8-OTHER',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 441
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5600,
		'Federal School Code': 38813,
		'TAP College Name': 'GRADUATE COLLEGE UNION UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4995
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5590,
		'Federal School Code': 2847,
		'TAP College Name': 'SUC ONEONTA',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 2,
		'Scholarship FTE': 1.5,
		'Scholarship Dollars': 4041.82
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1420,
		'Federal School Code': 4765,
		'TAP College Name': 'CUNY GRAD SCH UNDERGRAD PROG',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 2.13,
		'Scholarship Dollars': 6512.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5580,
		'Federal School Code': 2722,
		'TAP College Name': 'FORDHAM UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5575,
		'Federal School Code': 2882,
		'TAP College Name': 'SYRACUSE UNIVERSITY LAW',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 745,
		'Federal School Code': 6443,
		'TAP College Name': "ST JOHN'S RIVERSIDE HOSPITAL",
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 735
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1418,
		'Federal School Code': 4759,
		'TAP College Name': 'CUNY YORK COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 68,
		'Scholarship FTE': 58.25,
		'Scholarship Dollars': 58721.36
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5565,
		'Federal School Code': 2846,
		'TAP College Name': 'SUC NEW PALTZ',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 5,
		'Scholarship FTE': 3.13,
		'Scholarship Dollars': 74858.36
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5555,
		'Federal School Code': 2851,
		'TAP College Name': 'SUC ENV SCI&FORESTRY',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.54
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1417,
		'Federal School Code': 2698,
		'TAP College Name': 'CUNY COL STATEN ISLAND',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 107,
		'Scholarship FTE': 90.33,
		'Scholarship Dollars': 232112.06
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5540,
		'Federal School Code': 2840,
		'TAP College Name': 'SUNY UPSTATE MEDICAL UNIV. (GRAD)',
		'TAP Sector Group': '3-SUNY SO',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5533,
		'Federal School Code': 2791,
		'TAP College Name': 'PACE UNIVERSITY SCHOOL OF LAW',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 0.5,
		'Scholarship Dollars': 2447.55
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 10,
		'Federal School Code': 2666,
		'TAP College Name': 'ADELPHI UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 159,
		'Scholarship FTE': 147.5,
		'Scholarship Dollars': 280837.33
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 11,
		'Federal School Code': 2667,
		'TAP College Name': 'DOWLING COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 34,
		'Scholarship FTE': 31.38,
		'Scholarship Dollars': 114755.89
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 35,
		'Federal School Code': 2671,
		'TAP College Name': 'BARD COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 51,
		'Scholarship FTE': 46.5,
		'Scholarship Dollars': 39645
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 120,
		'Federal School Code': 2699,
		'TAP College Name': 'CLARKSON UNIVERSITY',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 322,
		'Scholarship FTE': 305.5,
		'Scholarship Dollars': 260102.2
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 168,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV SCH ENGINEERING',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 87,
		'Scholarship FTE': 86,
		'Scholarship Dollars': 83000
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 330,
		'Federal School Code': 2739,
		'TAP College Name': 'ITHACA COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 320,
		'Scholarship FTE': 311.75,
		'Scholarship Dollars': 388024.75
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 735,
		'Federal School Code': 2821,
		'TAP College Name': 'ST JOHN FISHER COLLEGE',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 178,
		'Scholarship FTE': 171.13,
		'Scholarship Dollars': 180395.99
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 1416,
		'Federal School Code': 2690,
		'TAP College Name': 'CUNY QUEENS COLLEGE',
		'TAP Sector Group': '1-CUNY SR',
		'Scholarship Headcount': 353,
		'Scholarship FTE': 321.79,
		'Scholarship Dollars': 305531.11
	},
	{
		'Academic Year': 2009,
		'TAP College Code': 5495,
		'Federal School Code': 2707,
		'TAP College Name': 'COLUMBIA UNIV LAW GRAD',
		'TAP Sector Group': '5-INDEPENDENT',
		'Scholarship Headcount': 1,
		'Scholarship FTE': 1,
		'Scholarship Dollars': 4895.1
	}
];
export default dataset1;
