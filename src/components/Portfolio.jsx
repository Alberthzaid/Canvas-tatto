import React from 'react';

const portfolioImages = [
  {
    alt: 'Dark aesthetic tattoo masterpiece 1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJuiSBe3wL7Tbln4HNl_zhRvlCtcISDPgYROg2xneSXxL5NzH-UoK83GYF3kLYjl_KtfRLnqikfTPyryckUUpW0guvf7OwcnUeNljycaUPX41GvQ-Z_EU2CHxqDXiCLdsiIvoNDJz-HAR1S6WHRWgv_S8P82YmBicVc2cTT1vGOSohKZ5nnhib-R1ed8zvvZuZ0vfx83EDmjDNBqL6IQyRDBlifw3kMlm6ZV4g_lVMSavT4To_GTL0iGmRQGb7R9ZVdwbDD64yTS4',
    aspect: '[3/4]'
  },
  {
    alt: 'Dark aesthetic tattoo masterpiece 2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMe32TyJxcwn1FRUPo672rwBE-QlnATkYLNxpSv8Nzde5saVi35YA4ASwu96_pS0HMTscdOlSzY2H_wpAnkXhcpBUjGnuBKMlcMqi3f83KvugffTWFGmEWvpvgfixVtH_UrnIk123IvFUUk9lAh1taMts111uWuHbeyBwzBijpW-xJrjRXfUHsx27ZBU0mqPu1UW-q_q-85MbOsSIqdlSqSsMFA3p70lQaBlDERp3Z7Z0f5_AAtq3cJPDP9pguWJuK0151fA8GfcQ',
    aspect: 'square'
  },
  {
    alt: 'Dark aesthetic tattoo masterpiece 3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUnM-fFHTY0qX2q4e4izYSzR0eW2Q0qUnf0m3xYp6nN1LMEUEN7hh52-jf7B0A8sWJL7iYnJ-fUWbf6C50G-iUqF442t1CCOVmck61U2WbbE-rQh5ZCWB8w9ME6YeaeGVsXCq22_xYicCclnvHfR3xg5_tzzbMV5y19gI8HSpytHX5U3FnLd_BfzEaMAkT0tN9nKXxjl3RuckWf2uOgrXqy75nx058jJ-6ZLe97SD9khWhbmhGp7s1gg4XcXBYxaELDI89hheTugY',
    aspect: 'square'
  },
  {
    alt: 'Dark aesthetic tattoo masterpiece 4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-xFK44ZtsKt7yL04pvDGhZp4y5IFl3eXtdMIRBcTKdgBYNVmlfIwpAZw0cN3_JjmjECO_ymupauXzNS2x11lwcfMn0Qb2leBzgIx_DxfdHXN7SZLOvCUVl5MeafYQCAnwzSIoVh-XgcWPx_P7UT3NXvd6PYA9vBqR4GDrCVyXSc1q1wJFifWY0f5-zH995zBLGMyNsNYSQe6q0Oz_rn5lX3Fv_ewjS6Erio2NdFzaqT25AD0SDlxX_VW-CTzh1A8FNrGMfXjbGbM',
    aspect: '[3/5]'
  },
  {
    alt: 'Dark aesthetic tattoo masterpiece 5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHj4wtLxu8XYUxISp8oVOnQ9oOB-UU9Ry6DqCBWS7Jxne5fdAdLSrCiLBL3s0x90ehgaIqGBpCfm8d9uMzGXX6BT-TNRyXUNKEBo8FhzoIqCL4e9geTucbKufQHfGBy8tuMcFY01tHCfMv2R81mpQH29sh-1gTvGG3ITPttaBqqtQvpImkjUaqNEYzCeY2JX_oJGTrWjZqB8WRigce3OSPaGI-JA0k2IGhyvdA-oBUgyUdjm43PWvdLQ6iEOCP49GfAVfRx76VDsQ',
    aspect: '[4/5]'
  },
  {
    alt: 'Dark aesthetic tattoo masterpiece 6',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDWGuSuX1GMUVk0vs8fv0IdQ8pYaVjQvYe6SmlGu-tT5klUw6U0MtNSJZ1dSa0YUSTci1pREYuZkkMnvB_Yf5c8Vu5YbppsnS9_gViehW45Zc2p2pZhcxfxJvsxXgZX1LUlSLl9U70ux0XoUHn8EWHYtl-UtbWwz1HCWsSproa2Db-hQrhqHENYda6hyKyRJkzdkTi4GZ_3Wl-1nfKxyHMrsPaaqb3oCRRsPheXOhqKSMt9HKV8aOCMnz4C6tn544GGEe8HoD-jLA',
    aspect: 'square'
  },
  {
    alt: 'Dark aesthetic tattoo masterpiece 7',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJttgpdBTuETuxmzPSAcWhVRIWmUBNgvk9Kijnshr-9FsE-v_JmAZgNs4Wlu2w2WKBlAYaqz4ntb-d_UBLBQO_ESJNW46DZDGKqZsn_n-kajzi91N7DPNPkCzh54HDqq8c5V5HqvYiDOb_tCwhaSxNG1g1q2VMicAo3VAsmZgUbsEptOTbfQoatY3k7gbPZOzoZYweAOuWoY3uuK9sg_KqO8-bj7ZgBOESgn-wvhSXF3IvrWFXDlY-wpYn4dG_t5BbW69VHG1BXZE',
    aspect: 'square'
  },
  {
    alt: 'Dark aesthetic tattoo masterpiece 8',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmdiYWz24dF_lp_1-X_8coh76P3HMf8YrBFMjQ9zFF-w5bU6cvQ7NBHwH8u0PgYNALkfMPVPe7dGmYZfz5j0-dy3Mz8sx9k-zpskiJ2ysqDk6FflN9OqNHG2XWoVRxjfcXjY17AP9JcAHwSe9bthwHq6cGFeniGfwMYvEQnomzaOovleS8XgO5Tg6Uu1GatX6siwWVkKEHx7jB5Xy7FaQRcGXHM8TCvDbOclq0_U-TRYAfPbPHQ0lpZmjcTNQVp4WnqlXgDxWsvD0',
    aspect: '[3/4]'
  }
];

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32" id="galeria">
      <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-center mb-20">Portfolio Maestro</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="masonry-item space-y-4">
          <div className="aspect-[3/4] bg-zinc-900 rounded-sm overflow-hidden">
            <img alt={portfolioImages[0].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={portfolioImages[0].src} />
          </div>
          <div className="aspect-square bg-zinc-900 rounded-sm overflow-hidden">
            <img alt={portfolioImages[1].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={portfolioImages[1].src} />
          </div>
        </div>
        <div className="masonry-item space-y-4 pt-12">
          <div className="aspect-square bg-zinc-900 rounded-sm overflow-hidden">
            <img alt={portfolioImages[2].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={portfolioImages[2].src} />
          </div>
          <div className="aspect-[3/5] bg-zinc-900 rounded-sm overflow-hidden">
            <img alt={portfolioImages[3].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={portfolioImages[3].src} />
          </div>
        </div>
        <div className="masonry-item space-y-4">
          <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden">
            <img alt={portfolioImages[4].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={portfolioImages[4].src} />
          </div>
          <div className="aspect-square bg-zinc-900 rounded-sm overflow-hidden">
            <img alt={portfolioImages[5].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={portfolioImages[5].src} />
          </div>
        </div>
        <div className="masonry-item space-y-4 pt-8">
          <div className="aspect-square bg-zinc-900 rounded-sm overflow-hidden">
            <img alt={portfolioImages[6].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={portfolioImages[6].src} />
          </div>
          <div className="aspect-[3/4] bg-zinc-900 rounded-sm overflow-hidden">
            <img alt={portfolioImages[7].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={portfolioImages[7].src} />
          </div>
        </div>
      </div>
    </section>
  );
}
