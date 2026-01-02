// Small bird SVG (no chat bubble) - for top area
function SmallBird({
  flip = false,
  opacity_bird = "1",
}: {
  flip?: boolean;
  opacity_bird?: string;
}) {
  return (
    <svg
      width="42"
      height="14"
      viewBox="0 0 42 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <path
        d="M0.184547 0.00157207C1.3409 0.0785971 9.20524 1.31197 13.0604 2.23725C16.9155 3.16252 20.9247 8.48212 21.85 8.71319C22.7753 8.94427 27.2466 8.4051 31.1018 8.09602C34.9569 7.78792 42.3582 12.0282 42.3582 12.0282C42.3582 13.6477 34.8789 11.18 32.2581 11.0259C29.6364 10.8719 25.5501 11.7201 24.7019 12.4133C23.8536 13.1075 22.2351 14.0328 20.8467 13.9558C19.4593 13.8788 15.5271 11.1029 15.141 10.5638C14.7549 10.0236 16.7605 9.79251 16.7605 9.79251C16.7605 9.79251 16.7605 9.79253 14.91 7.47983C13.0594 5.16713 8.97319 4.0878 6.27439 3.3936C3.57754 2.70038 -0.971803 -0.0754529 0.184547 0.00157207Z"
        fill="#00336B"
        opacity={opacity_bird}
      />
    </svg>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-[100px] sm:bottom-[115px] md:bottom-[130px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-50 animate-rise">
      <span className="text-foreground text-base md:text-lg font-medium">
        Scroll to learn more
      </span>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="text-foreground"
      >
        <path
          d="M13.8632 24.7812L12.8481 23.4926C11.2035 21.4048 10.3812 20.361 10.7562 19.5139C11.1313 18.6667 12.4158 18.6667 14.9848 18.6667H17.0151C19.5841 18.6667 20.8685 18.6667 21.2437 19.5139C21.6188 20.361 20.7964 21.4048 19.1517 23.4926L18.1367 24.7811C17.1464 26.0382 16.6513 26.6667 16 26.6667C15.3485 26.6667 14.8535 26.0382 13.8632 24.7812Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 18.6666V5.33331"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function BirdIllustration() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-[2%] sm:left-[5%] md:left-[10%] top-[120px] sm:top-[140px] md:top-[160px] lg:top-[180px] animate-rise-bird">
        <SmallBird />
      </div>

      <div className="absolute left-[1%] sm:left-[8%] md:left-[22%] top-[200px] sm:top-[220px] md:top-[230px] lg:top-[250px] animate-rise-bird">
        <SmallBird opacity_bird="0.3" />
      </div>

      <div className="absolute right-[2%] sm:right-[6%] md:right-[20%] top-[100px] sm:top-[120px] md:top-[160px] lg:top-[190px] animate-rise-bird">
        <SmallBird />
      </div>

      <div className="absolute right-[1%] sm:right-[5%] md:right-[17%] top-[260px] sm:top-[280px] md:top-[300px] lg:top-[340px] animate-rise-bird">
        <SmallBird opacity_bird="0.3" />
      </div>

      {/* Still Birds */}
      <div className="absolute left-[1%] sm:left-[8%] md:left-[22%] top-[200px] sm:top-[220px] md:top-[230px] lg:top-[250px]">
        <SmallBird />
        <div className="absolute inset-x-0 bottom-[-4px] h-1 bg-black/20 rounded-full blur-sm"></div>
      </div>

      <div className="absolute right-[1%] sm:right-[5%] md:right-[17%] top-[260px] sm:top-[280px] md:top-[300px] lg:top-[340px]">
        <SmallBird />
        <div className="absolute inset-x-0 bottom-[-4px] h-1 bg-black/20 rounded-full blur-sm"></div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* ===== BOTTOM BIRDS WITH CHAT BUBBLES - positioned with clouds ===== */}
      <svg
        viewBox="-120 50 1700 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full h-auto animate-rise"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Bird 3 - Main bird bottom right with message bubble */}
        <path
          d="M966.687 665.005C970.156 665.236 993.75 668.937 1005.32 671.713C1016.88 674.489 1028.91 690.448 1031.69 691.142C1034.46 691.837 1047.88 690.216 1059.44 689.292C1071.01 688.366 1093.21 701.09 1093.21 701.09C1093.21 705.947 1070.77 698.545 1062.91 698.082C1055.04 697.619 1042.79 700.163 1040.24 702.245C1037.7 704.327 1032.84 707.103 1028.68 706.871C1024.51 706.64 1012.72 698.313 1011.56 696.695C1010.4 695.076 1016.42 694.382 1016.42 694.382C1016.42 694.382 1016.42 694.382 1010.87 687.442C1005.32 680.502 993.058 677.265 984.963 675.184C976.866 673.1 963.216 664.773 966.687 665.005Z"
          fill="#00336B"
        />
        <rect
          x="965"
          y="693.972"
          width="44.7541"
          height="25.8785"
          rx="12.9393"
          transform="rotate(-10.9708 965 693.972)"
          fill="#007AFF"
        />
        <circle
          cx="979.741"
          cy="703.67"
          r="2.58785"
          transform="rotate(-10.9708 979.741 703.67)"
          fill="white"
        />
        <circle
          cx="989.904"
          cy="701.7"
          r="2.58785"
          transform="rotate(-10.9708 989.904 701.7)"
          fill="white"
        />
        <circle
          cx="1000.07"
          cy="699.73"
          r="2.58785"
          transform="rotate(-10.9708 1000.07 699.73)"
          fill="white"
        />

        {/* Bird 4 - Center left with message bubble */}
        <g clipPath="url(#clip0_1_204)">
          <rect
            x="418.582"
            y="596"
            width="23.9071"
            height="13.824"
            rx="6.912"
            transform="rotate(23.8156 418.582 596)"
            fill="#007AFF"
          />
          <circle
            cx="422.094"
            cy="604.747"
            r="1.3824"
            transform="rotate(23.8156 422.094 604.747)"
            fill="white"
          />
          <circle
            cx="427.153"
            cy="606.98"
            r="1.3824"
            transform="rotate(23.8156 427.153 606.98)"
            fill="white"
          />
          <circle
            cx="432.211"
            cy="609.213"
            r="1.3824"
            transform="rotate(23.8156 432.211 609.213)"
            fill="white"
          />
        </g>
        <path
          d="M442.879 613.849C438.885 611.852 428.656 617.053 422.653 618.468C422.671 618.447 422.689 618.434 422.708 618.412C426.551 614.011 424.469 610.646 420.787 610.646C419.052 610.646 417.369 611.752 416.056 612.917C413.413 605.462 409.516 593.046 401.337 590.556C390.292 587.195 367 600.162 367 600.162C367 600.162 392.238 594.196 394.735 601.482C397.735 610.247 400.617 618.171 404.219 621.773C399.536 626.456 394.374 628.977 399.177 630.178C403.979 631.379 409.049 632.047 416.014 627.483C425.431 628.417 435.837 622.653 442.245 627.026C453.603 634.777 448.484 646.987 448.484 646.987C448.484 646.987 455.088 638.463 454.728 631.619C454.364 624.776 448.161 616.491 442.879 613.849Z"
          fill="#00336B"
        />

        {/* Bird 5 - Bottom left with message bubble */}
        <g clipPath="url(#clip1_1_204)">
          <rect
            x="173.688"
            y="688.259"
            width="34.4262"
            height="19.9066"
            rx="9.95328"
            transform="rotate(138.345 173.688 688.259)"
            fill="#007AFF"
          />
          <circle
            cx="160.13"
            cy="687.63"
            r="1.99066"
            transform="rotate(138.345 160.13 687.63)"
            fill="white"
          />
          <circle
            cx="154.18"
            cy="692.923"
            r="1.99066"
            transform="rotate(138.345 154.18 692.923)"
            fill="white"
          />
          <circle
            cx="148.231"
            cy="698.215"
            r="1.99066"
            transform="rotate(138.345 148.231 698.215)"
            fill="white"
          />
        </g>
        <path
          d="M154.608 664.353C161.908 661.664 177.948 658.879 177.085 658.014C176.22 657.149 155.762 657.053 148.365 661.951C142.828 665.619 133.364 676.66 128.955 681.979C127.386 672.053 123.546 656.106 118.932 650.696C112.053 642.627 73.7354 634.386 73.7354 634.386C75.4631 638.804 101.397 650.138 108.77 655.516C114.828 659.937 115.941 679.374 117.104 687.135C112.438 688.86 109.423 690.549 111.905 692.153C116.332 695.011 125.267 696.577 130.789 695.858C134.217 695.41 144.621 689.902 143.66 687.025C143.266 685.845 141.118 684.864 138.205 684.281C142.119 678.728 148.982 666.425 154.608 664.353Z"
          fill="#00336B"
        />

        {/* Bird 6 - Right side with message bubble */}
        <g clipPath="url(#clip2_1_204)">
          <rect
            x="1360.66"
            y="618.137"
            width="43.7944"
            height="19.9066"
            rx="9.95328"
            transform="rotate(-35.1175 1360.66 618.137)"
            fill="#007AFF"
          />
          <circle
            cx="1377.78"
            cy="618.262"
            r="1.99066"
            transform="rotate(-35.1175 1377.78 618.262)"
            fill="white"
          />
          <circle
            cx="1384.3"
            cy="613.682"
            r="1.99066"
            transform="rotate(-35.1175 1384.3 613.682)"
            fill="white"
          />
          <circle
            cx="1390.81"
            cy="609.101"
            r="1.99066"
            transform="rotate(-35.1175 1390.81 609.101)"
            fill="white"
          />
        </g>
        <path
          d="M1378.07 642.988C1376.16 639.513 1367.29 630.858 1358.09 622.353C1362.08 618.544 1367.85 619.77 1366.23 617.211C1363.46 612.83 1355.44 612.227 1349.67 614.664C1345.06 610.511 1340.92 606.837 1338.24 604.453C1328.87 596.12 1322.75 595.497 1305.69 595.497C1288.64 595.497 1279 591 1279 591C1282.13 600.46 1301.13 601.98 1312.72 603.151C1322.32 604.122 1332.39 613.449 1340.86 622.275C1336.93 625.408 1333.35 625.929 1331.21 627.106C1327.17 629.319 1331.94 631.539 1339.36 631.409C1342.24 631.358 1345.21 630.597 1347.9 629.528C1356.9 637.484 1372.56 643.281 1377.31 661.479C1382.32 680.669 1392.4 692.985 1392.4 692.985C1386.8 686.084 1381.48 649.203 1378.07 642.988Z"
          fill="#00336B"
        />

        <defs>
          <clipPath id="clip0_1_204">
            <rect
              x="418.582"
              y="596"
              width="23.9071"
              height="13.824"
              rx="6.912"
              transform="rotate(23.8156 418.582 596)"
            />
          </clipPath>
          <clipPath id="clip1_1_204">
            <rect
              x="173.688"
              y="688.259"
              width="34.4262"
              height="19.9066"
              rx="9.95328"
              transform="rotate(138.345 173.688 688.259)"
            />
          </clipPath>
          <clipPath id="clip2_1_204">
            <rect
              x="1360.66"
              y="618.137"
              width="43.7944"
              height="19.9066"
              rx="9.95328"
              transform="rotate(-35.1175 1360.66 618.137)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
